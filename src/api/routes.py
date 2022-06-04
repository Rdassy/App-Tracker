"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Application, Links, Notes, Interaction
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity

api = Blueprint('api', __name__)

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
    return jsonify({"token": access_token, "user_id": user.id})

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

@api.route("/links", methods=["POST"])
def create_links():
    id = request.json.get("id", None)
    user_id = request.json.get("user_id", None)
    link_type = request.json.get("link_type", None)
    link = request.json.get("link", None)
    links = Links(id = id, user_id = user_id, link_type = link_type, link = link)
    db.session.add(links)
    db.session.commit()
    return jsonify(**links.serialize())

@api.route("/application", methods=["POST"])
def create_application():
    id = request.json.get("id", None)
    user_id = request.json.get("user_id", None)
    job_title = request.json.get("job_title", None)
    company = request.json.get("company", None)
    date_created = request.json.get("date_created", None)
    location = request.json.get("location", None)
    req_id = request.json.get("req_id", None)
    description = request.json.get("description", None)
    status = request.json.get("status", None)
    experience = request.json.get("experience", None)
    job_type  = request.json.get("job_type", None)
    application = Application(id = id, user_id = user_id, job_title = job_title, company = company, date_created = date_created, location = location, req_id = req_id, description = description, status = status, experience = experience, job_type = job_type)
    db.session.add(application)
    db.session.commit()
    return jsonify(**application.serialize())

@api.route("/notes", methods=["POST"])
def create_notes():
    id = request.json.get("id", None)
    application_id = request.json.get("application_id", None)
    note = request.json.get("note", None)
    notes = Notes(id = id, application_id = application_id, note = note)
    db.session.add(notes)
    db.session.commit()
    return jsonify(**notes.serialize())

@api.route("/interaction", methods=["POST"])
def create_interaction():
    id = request.json.get("id", None)
    application_id = request.json.get("application_id", None)
    interaction_type = request.json.get("interaction_type", None)
    date = request.json.get("date", None)
    comment = request.json.get("comment", None)
    interaction = Interaction(id = id, application_id = application_id, interaction_type = interaction_type, date = date, comment = comment)
    db.session.add(interaction)
    db.session.commit()
    return jsonify(**interaction.serialize())

@api.route("/application", methods=["GET"])
@jwt_required()
def get_applications():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    applications = Application.query.filter_by(user_id = user.id).all()
    serial = [i.serialize() for i in applications]
    return jsonify(serial)

@api.route("/links", methods=["GET"])
@jwt_required()
def get_links():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    links = Links.query.filter_by(user_id=user.id).all()
    serial = [i.serialize() for i in links]
    return jsonify(serial)

@api.route("/notes", methods=["GET"])
@jwt_required()
def get_notes():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    application_id = request.json.get("application_id")
    notes = Notes.query.filter_by(user_id = user.id, application_id=application_id).all()
    serial = [i.serialize() for i in notes]
    return jsonify(serial)

@api.route("/interaction", methods=["GET"])
@jwt_required()
def get_interaction():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    application_id = request.json.get("application_id")
    interactions = Interaction.query.filter_by(user_id = user.id, application_id = application_id).all()
    serial = [i.serialize() for i in interactions]
    return jsonify(serial)