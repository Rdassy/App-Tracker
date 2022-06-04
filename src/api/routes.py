"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Application
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route("/user", methods=["POST"])
def create_user():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    first_name = request.json.get("first_name", None)
    last_name = request.json.get("last_name", None)
    user = User(email=email, password=password, first_name=first_name, last_name=last_name)
    db.session.add(user)
    db.session.commit()
    return jsonify(**user.serialize())

@api.route("/token", methods=["POST"])
def create_token():
    if request.json is None:
        return jsonify({"msg": "Body Empty!"}), 401
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        raise APIException("User Not Found!")
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id, "role":role})

@api.route("/application", methods=["GET"])
# @jwt_required()
def get_applications():
    # current_user_id=get_jwt_identity()
    # user = User.query.get()
    applications = Application.query.filter_by(user_id=5).first()
    return jsonify(applications.serialize())