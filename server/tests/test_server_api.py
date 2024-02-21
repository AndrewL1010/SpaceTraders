import sys
import os

sys.path.append(os.path.join(os.path.dirname(__file__), ".."))
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
import pytest
from unittest.mock import MagicMock, Mock
from unittest.mock import patch
import unittest
from app import create_app
from app import db


class Users(db.Model):
    def __init__(self, id, username, password, email, access_token, verified):
        self.id = id
        self.username = username
        self.password = password
        self.email = email
        self.access_token = access_token
        self.verified = verified

load_dotenv()


@pytest.fixture(scope="module")
def app():
    app = create_app()

    app.config.update(
        {
            "TESTING": True,
        }
    )

    yield app


@pytest.fixture()
def client(app):
    return app.test_client()


@patch("app.requests.get")
@patch("app.db.session.add")
@patch("app.db.session.commit")
def test_register_route_with_valid_data(mock_commit, mock_add, mock_requests_get, client):
    mock_commit.return_value = MagicMock()
    mock_add.return_value = MagicMock()
    mock_requests_get.return_value = MagicMock()
    data = {
        "username": "alu1029",
        "email": "omegawww123@gmail.com",
        "password": "randomPassword",
        "access_token": "12fasmvjvjq123fsqqwdas1231233",
    }

    response = client.post("/api/register", json=data, content_type="application/json")
    assert response.status_code == 201
    response_content = response.get_json()
    assert response_content["message"] == "Pending Verification"


@patch("app.requests.get")
@patch("app.db.session.add")
@patch("app.db.session.commit")
def test_register_route_with_invalid_data(mock_commit, mock_add, mock_requests_get, client):
    mock_commit.return_value = MagicMock()
    mock_add.return_value = MagicMock()
    mock_requests_get.return_value = MagicMock()
    data = {
        "username": "alu1029",
        "password": "newpassword",
        "access_token": "12fasmvjvjq123fsqqwdas1231233",
    }

    response = client.post("/api/register", json=data, content_type="application/json")
    assert response.status_code == 400
    response_content = response.get_json()

    assert response_content["message"] == "'email' is a required property"


@patch("flask.Response.set_cookie")
@patch("app.bcrypt.checkpw")
@patch("app.db.Model.query")
@patch("app.jwt")
def test_login_with_valid_credentials(mock_jwt, mock_query, mock_checkpw, mock_set_cookie, client):

    found_user = Users(
        id=1,
        username="alu1029",
        password="randomPassword",
        email="omegawww123@gmail.com",
        access_token="12fasmvjvjq123fsqqwdas1231233",
        verified=True
    )

    mock_query.filter_by.return_value.first.return_value = found_user

    mock_checkpw.return_value = True

    mock_jwt.encode.return_value = "12fasmvjvjq123fsqqwdas1231233"

    mock_set_cookie.return_value = MagicMock()

    data = {
        "username": "alu1029",
        "password": "randomPassword"
    }

    response = client.post("/api/login", json=data, content_type="application/json")
    assert response.status_code == 201

    response_content = response.get_json()
    assert response_content["message"] == "user authenticated"
    assert response_content["access_token"] == "12fasmvjvjq123fsqqwdas1231233"
    assert "user_token" in response_content
    assert "csrf-encoded-token" in response_content


@patch("app.db.Model.query")
def test_login_with_invalid_username(mock_query, client):


    mock_query.filter_by.return_value.first.return_value = None

    data = {
        "username": "NoUser",
        "password": "badpassword",
        "access_token": "12fasmvjvjq123fsqqwdas1231233",
    }

    response = client.post("/api/login", json=data, content_type="application/json")
    assert response.status_code == 401

    response_content = response.get_json()
    assert response_content["message"] == "Incorrect username or token"


@patch("app.bcrypt.checkpw")

@patch("app.db.Model.query")
def test_login_with_invalid_token(mock_query, mock_checkpw, client):

    found_user = Users(
        id=1,
        username="alu1029",
        password="password",
        email="omegawww123@gmail.com",
        access_token="12fasmvjvjq123fsqqwdas1231233",
        verified=True
    )

    mock_query.filter_by.return_value.first.return_value = found_user

    mock_checkpw.return_value = False

    data = {
        "username": "alu1029",
        "password": "password",
        "access_token": "badToken",
    }

    response = client.post("/api/login", json=data, content_type="application/json")
    assert response.status_code == 401

    response_content = response.get_json()
    assert response_content["message"] == "Incorrect username or token"


@patch("app.jwt.decode")
def test_auth_with_valid_user_token(mock_jwt_decode, client):

    mock_jwt_decode.return_value = "123456789"

    client.set_cookie("user_token", "12312313ffsdfsdf")

    response = client.post("/api/auth")
    assert response.status_code == 201

    response_content = response.get_json()
    assert response_content["message"] == "Authorized access"


@patch("app.jwt.decode")
def test_auth_with_no_user_token(mock_jwt_decode, client):

    mock_jwt_decode.return_value = "123456789"

    response = client.post("/api/auth")
    assert response.status_code == 401

    response_content = response.get_json()
    assert response_content["message"] == "Unauthorized access"


@patch("app.jwt.decode")
def test_logout_with_valid_tokens(mock_jwt_decode, client):

    mock_jwt_decode.return_value = "123456789"

    headers = {"csrf-encoded-token": "12312313ffsdfsdf"}
    client.set_cookie("csrf-encoded-token", "12312313ffsdfsdf")

    response = client.post("/api/logout", headers=headers)
    assert response.status_code == 204

def test_logout_with_invalid_tokens(client):

    headers = {"csrf-encoded-token": "12312313ffsdfsdf"}
    client.set_cookie("csrf-encoded-token", "12312313ffsdfsdf")

    response = client.post("/api/logout", headers=headers)
    assert response.status_code == 403

    response_content = response.get_json()
    assert response_content["message"] == "Unauthorized request" 


@patch("app.jwt.decode")
@patch("app.db.Model.query")
@patch("app.db.session.commit")
def test_account_verification_endpoint(mock_db_commit, mock_query, mock_jwt_decode, client):
    mock_db_commit.return_value = MagicMock()

    found_user = Users(
        id=1,
        username="real_username",
        password="randomPassword",
        email="omegawww123@gmail.com",
        access_token="12fasmvjvjq123fsqqwdas1231233",
        verified=False
    )

    mock_query.filter_by.return_value.first.return_value = found_user

    mock_jwt_decode.return_value = {"username": "real_username"}

    response = client.get("/api/verify/abcdefgToken")
    assert response.status_code == 302