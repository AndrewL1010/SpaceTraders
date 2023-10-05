from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from jsonschema import validate
from flask_mail import Mail, Message
load_dotenv()
import bcrypt
import jwt
import os
import re
import jsonschema
import requests
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:4739@localhost:5432/SpaceTraders'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAIL_SERVER']='smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.getenv("HOST_EMAIL")
app.config['MAIL_PASSWORD'] = os.getenv("HOST_PASSWORD")
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
db = SQLAlchemy(app)
mail = Mail(app)
CORS(app, origins='*')


class Users(db.Model):
    id = db.Column("id", db.Integer, primary_key=True)
    username = db.Column(db.String(100))
    email = db.Column(db.String(100))
    access_token = db.Column(db.String(255))


@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    try: 
        schema = {
            "type": "object",
            "properties": {
                "username": {
                "type": "string"
                },
                "access_token": {
                "type": "string"
                }
            },
            "required": ["username","access_token"]
        }
        validate(instance=data, schema=schema)
    

    except Exception as e:
        response = make_response(jsonify({"message": "invalid input"}), 400)
        return response

    secret_key = os.getenv("USER_SECRET_KEY")
    req_username = data.get("username")
    req_token = data.get("access_token")
    try:
        existing_user = Users.query.filter_by(username=req_username).first()
        if existing_user:
            if bcrypt.checkpw(req_token.encode('utf-8'), existing_user.access_token.encode('utf-8')):
                jwt_token = jwt.encode({"username": existing_user.username, "access_token": req_token}, secret_key, algorithm="HS256")
                response = make_response(jsonify({"message": "user authenticated", "jwt_token": jwt_token}), 201)

            else:
                response = make_response(jsonify({"meesage": "Incorrect access_token"}), 401)
        
        else:
            response = make_response(jsonify({"message": "Incorrect username or token"}), 401)
        return response
    except Exception as e:
        print(e)
        response = make_response(jsonify({"message": "an error has occured on the server side"}), 500)


@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    
    try:
        req_token = data.get("access_token")
        url = "https://api.spacetraders.io/v2/my/agent"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {req_token}"

        }
        response = requests.get(url, headers=headers)
        result = response.json()
        if "error" in result:
            raise jsonschema.exceptions.ValidationError("Invalid token for registration")

        schema = {
            "type": "object",
            "properties": {
                "username": {
                "type": "string",
                "maxLength": 14
                },
                "email": {
                "type": "string",
                "format": "email"
                },
                "access_token": {
                "type": "string"
                }
            },
            "required": ["username","email", "access_token"]
        }
        validate(instance=data, schema=schema)
    
        if not re.match(r'^[\w\.-]+@[\w\.-]+$', data['email']):
            raise jsonschema.exceptions.ValidationError("Invalid email format")
    except Exception as e:
        print(e)
        response = make_response(jsonify({"message": e.message}), 400)
        return response
    
    try:
        username = data.get("username")
        email = data.get("email")
        access_token = data.get("access_token")

        encoded_token = bcrypt.hashpw(access_token.encode('utf-8'), bcrypt.gensalt())
        new_user = Users(username=username, email=email, access_token=encoded_token.decode('utf-8'))
        db.session.add(new_user)
        db.session.commit()

        html_body = f"""
            <html>
                <body>
                    <h2>Hello {username}!</h2>
                    <p>Your SpaceTraders account has been created.</p>
                    <p>Please use the provided token to login and play:</p>
                    <p><strong>Token:</strong> {access_token}</p>
                </body>
            </html>
            """

        msg = Message(subject='SpaceTraders Registration', sender=os.getenv("HOST_EMAIL"), recipients=[email])
        msg.html = html_body
        mail.send(msg)

        response = make_response(jsonify({"message": "account created"}), 201)
        return response


    except Exception as e:
        print(e)
        response = make_response(jsonify({"message": "something went wrong on the server side"}), 500)
        return response

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)