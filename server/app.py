import datetime
import boto3
from flask import Flask, redirect, request, jsonify, make_response, url_for
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from jsonschema import validate
from flask_mail import Mail, Message
from flask_cors import CORS

load_dotenv()
import bcrypt
import jwt
import os
import re
import jsonschema
import requests
import secrets

db = SQLAlchemy()


class Users(db.Model):
    id = db.Column("id", db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    password = db.Column(db.String(100))
    email = db.Column(db.String(100))
    access_token = db.Column(db.String(1024))
    verified = db.Column(db.Boolean, default=False)


def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DB_URL")
    if os.getenv("SERVER_ENV") == "production":
        ssm = boto3.client("ssm", region_name="us-west-1")
        USER_SECRET_KEY = ssm.get_parameter(
            Name="/USER_SECRET_KEY", WithDecryption=True
        )["Parameter"]["Value"]
        HOST_EMAIL = ssm.get_parameter(Name="/HOST_EMAIL", WithDecryption=True)[
            "Parameter"
        ]["Value"]
        HOST_PASSWORD = ssm.get_parameter(Name="/HOST_PASSWORD", WithDecryption=True)[
            "Parameter"
        ]["Value"]
        CSRF_SECRET_KEY = ssm.get_parameter(
            Name="/CSRF_SECRET_KEY", WithDecryption=True
        )["Parameter"]["Value"]

        os.environ["USER_SECRET_KEY"] = USER_SECRET_KEY
        os.environ["HOST_EMAIL"] = HOST_EMAIL
        os.environ["HOST_PASSWORD"] = HOST_PASSWORD
        os.environ["CSRF_SECRET_KEY"] = CSRF_SECRET_KEY

    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["MAIL_SERVER"] = "smtp.gmail.com"
    app.config["MAIL_PORT"] = 465
    app.config["MAIL_USERNAME"] = os.getenv("HOST_EMAIL")
    app.config["MAIL_PASSWORD"] = os.getenv("HOST_PASSWORD")
    app.config["MAIL_USE_TLS"] = False
    app.config["MAIL_USE_SSL"] = True
    app.config["CORS_HEADERS"] = "Content-Type"

    db.init_app(app)
    mail = Mail(app)
    CORS(app, supports_credentials=True)

    @app.route("/api/login", methods=["POST"])
    def login():

        data = request.get_json()
        try:
            schema = {
                "type": "object",
                "properties": {
                    "username": {"type": "string"},
                    "password": {"type": "string"},
                },
                "required": ["username", "password"],
            }
            validate(instance=data, schema=schema)

        except Exception as e:
            response = make_response(jsonify({"message": "invalid input"}), 400)
            return response
        secret_key = os.getenv("USER_SECRET_KEY")
        req_username = data.get("username")
        req_password = data.get("password")
        try:
            existing_user = Users.query.filter_by(username=req_username).first()
            if existing_user:
                
                if bcrypt.checkpw(
                    req_password.encode("utf-8"),
                    existing_user.password.encode("utf-8"),
                ):
                    if(existing_user.verified == False):
                        response = make_response(
                        jsonify({"message": "user has not verified through email yet"}), 401)
                        return response


                    jwt_token = jwt.encode(
                        {"token": secrets.token_hex(32)},
                        secret_key,
                        algorithm="HS256",
                    )

                    csrf_token = secrets.token_hex(32)
                    csrf_encoded_token = jwt.encode(
                        {"csrf_token": csrf_token},
                        os.getenv("CSRF_SECRET_KEY"),
                        algorithm="HS256",
                    )
                    response = make_response(
                        jsonify(
                            {
                                "message": "user authenticated",
                                "user_token": jwt_token,
                                "csrf-encoded-token": csrf_encoded_token,
                                "access_token": existing_user.access_token,
                            }
                        ),
                        201,
                    )
                    expire_date = datetime.datetime.now()
                    expire_date = expire_date + datetime.timedelta(days=90)
                    response.set_cookie(
                        "user_token",
                        jwt_token,
                        expires=expire_date,
                        httponly=True,
                        samesite="None",
                        secure=True,
                    )
                    response.set_cookie(
                        "csrf-encoded-token",
                        csrf_encoded_token,
                        expires=expire_date,
                        httponly=False,
                        samesite="None",
                        secure=True,
                    )
                    response.set_cookie(
                        "access_token",
                        existing_user.access_token,
                        expires=expire_date,
                        httponly=False,
                        samesite="None",
                        secure=True,
                    )

                else:

                    response = make_response(
                        jsonify({"message": "Incorrect username or token"}), 401
                    )

            else:
                response = make_response(
                    jsonify({"message": "Incorrect username or token"}), 401
                )

        except Exception as e:
            print(e)
            response = make_response(
                jsonify({"message": "an error has occured on the server side"}), 500
            )
        return response

    @app.route("/api/register", methods=["POST"])
    def register():
        data = request.get_json()

        try:
            req_token = data.get("access_token")
            url = "https://api.spacetraders.io/v2/my/agent"
            headers = {
                "Content-Type": "application/json",
                "Authorization": f"Bearer {req_token}",
            }
            response = requests.get(url, headers=headers)
            result = response.json()
            if "error" in result:
                raise jsonschema.exceptions.ValidationError(
                    "Invalid token for registration"
                )

            schema = {
                "type": "object",
                "properties": {
                    "username": {"type": "string", "maxLength": 14},
                    "password": {"type": "string", "maxLength": 30},
                    "email": {"type": "string", "format": "email"},
                    "access_token": {"type": "string"},
                },
                "required": ["username", "password", "email", "access_token"],
            }
            validate(instance=data, schema=schema)
            if not re.match(r"^[\w\.-]+@[\w\.-]+$", data["email"]):
                raise jsonschema.exceptions.ValidationError("Invalid email format")
        except Exception as e:
            print(e)
            response = make_response(jsonify({"message": e.message}), 400)
            return response

        try:
            username = data.get("username")
            password = data.get("password")
            email = data.get("email")
            access_token = data.get("access_token")

            encoded_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

            new_user = Users(
                username=username,
                password=encoded_password.decode("utf-8"),
                email=email,
                access_token=access_token,
            )
            db.session.add(new_user)
            db.session.commit()

            token = jwt.encode(
                {"username": username},
                os.environ["EMAIL_SECRET_KEY"],
                algorithm="HS256",
            )
            url = os.environ["BACK_END_URL"]
            html_body = f"""
                <html>
                    <body>
                        <h2>Hello {username}!</h2>
                        <p>Your SpaceTraders account is pending verification.</p>
                        <p>Please click on the link to verify your account:</p>
                        <p><strong>Verify:</strong> <a id="token" href="{url}/api/verify/{token}">{url}/api/verify/{token}</a></p>
                    </body>
                </html>
                """

            msg = Message(
                subject="SpaceTraders Registration",
                sender=os.getenv("HOST_EMAIL"),
                recipients=[email],
            )
            msg.html = html_body
            mail.send(msg)

            response = make_response(jsonify({"message": "Pending Verification"}), 201)
            return response

        except Exception as e:
            print(e)
            response = make_response(
                jsonify({"message": "something went wrong on the server side"}), 500
            )
            return response

    @app.route("/api/auth", methods=["POST"])
    def auth():

        if "user_token" not in request.cookies:
            response = make_response(jsonify({"message": "Unauthorized access"}), 401)
            return response

        secret = os.getenv("USER_SECRET_KEY")
        request_jwt = request.cookies.get("user_token")

        try:
            decoded_token = jwt.decode(request_jwt, secret, algorithms=["HS256"])
            response = make_response(jsonify({"message": "Authorized access"}), 201)

        except Exception as e:
            response = make_response(jsonify({"message": "Unauthorized access"}), 401)

        return response

    @app.route("/api/logout", methods=["POST"])
    def logout():
        csrf_token_headers = request.headers.get("csrf-encoded-token")
        csrf_token_cookies = request.cookies.get("csrf-encoded-token")

        try:
            csrf_decoded_headers = jwt.decode(
                csrf_token_headers, os.getenv("CSRF_SECRET_KEY"), algorithms="HS256"
            )
            csrf_decoded_cookies = jwt.decode(
                csrf_token_cookies, os.getenv("CSRF_SECRET_KEY"), algorithms="HS256"
            )
            if csrf_decoded_cookies == csrf_decoded_headers:
                response = make_response(
                    jsonify({"message": "Authorized request"}), 204
                )
                response.delete_cookie("csrf-encoded-token")
                response.delete_cookie("user_token")
                response.delete_cookie("access_token")
                return response

            else:
                response = make_response(
                    jsonify({"message": "Unauthorized request"}, 403)
                )

        except Exception as e:
            response = make_response(jsonify({"message": "Unauthorized request"}), 403)

        return response

    @app.route("/api/verify/<token>", methods=["GET"])
    def verify(token): 
 
        try:
            secret_key = os.getenv("EMAIL_SECRET_KEY")
            decoded_token = jwt.decode(token, secret_key, algorithms=["HS256"])
            username = decoded_token["username"]
            existing_user = Users.query.filter_by(username=username).first()

            if existing_user:
                existing_user.verified = True
                db.session.commit()
                response = make_response(redirect(os.getenv("LOCAL_HOST_URL")))
                link = os.getenv("LOCAL_HOST_URL")
                response = make_response(redirect(f'{link}?recently_verified=true'))
                return response
            else:
                response = make_response(redirect(os.getenv("LOCAL_HOST_URL")))
                link = os.getenv("LOCAL_HOST_URL")
                response = make_response(redirect(f'{link}?recently_verified=false'))
                return response

        except Exception as e:
            print(e)
            link = os.getenv("LOCAL_HOST_URL")
            response = make_response(redirect(f'{link}?recently_verified=false'))
            return response
        

    return app


if __name__ == "__main__":
    app = create_app()
    with app.app_context():
        db.create_all()
    app.run(debug=True, host="localhost", port=5000)
