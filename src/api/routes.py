"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Application, Link, Note, Interaction
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

@api.route("/link", methods=["POST"])
def create_link():
    id = request.json.get("id", None)
    user_id = request.json.get("user_id", None)
    link_type = request.json.get("link_type", None)
    link_url = request.json.get("link_url", None)
    link = Link(id = id, user_id = user_id, link_type = link_type, link_url = link_url)
    db.session.add(link)
    db.session.commit()
    return jsonify(**link.serialize())

@api.route("/application", methods=["POST"])
@jwt_required()
def create_application():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    job_title = request.json.get("job_title", None)
    company = request.json.get("company", None)
    date_created = request.json.get("date_created", None)
    location = request.json.get("location", None)
    req_id = request.json.get("req_id", None)
    description = request.json.get("description", None)
    job_status = request.json.get("job_status", None)
    experience = request.json.get("experience", None)
    job_type  = request.json.get("job_type", None)
    application = Application(user_id = user.id, job_title = job_title, company = company, date_created = date_created, location = location, req_id = req_id, description = description, job_status = job_status, experience = experience, job_type = job_type)
    db.session.add(application)
    db.session.commit()
    return jsonify(**application.serialize())

@api.route("/note", methods=["POST"])
def create_note():
    id = request.json.get("id", None)
    application_id = request.json.get("application_id", None)
    note_text = request.json.get("note_text", None)
    note = Note(id = id, application_id = application_id, note_text = note_text)
    db.session.add(note)
    db.session.commit()
    return jsonify(**note.serialize())

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

@api.route("/user", methods=["GET"])
@jwt_required()
def get_self():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    return jsonify(user.serialize())

@api.route("/application", methods=["GET"])
@jwt_required()
def get_applications():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    applications = Application.query.filter_by(user_id = user.id).all()
    serial = [i.serialize() for i in applications]
    return jsonify(serial)

@api.route("/link", methods=["GET"])
@jwt_required()
def get_links():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    links = Link.query.filter_by(user_id=user.id).all()
    serial = [i.serialize() for i in links]
    return jsonify(serial)

@api.route("/note", methods=["GET"])
@jwt_required()
def get_notes():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    application_id = request.json.get("application_id")
    notes = Note.query.filter_by(user_id = user.id, application_id=application_id).all()
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

@api.route("/user", methods=["PUT"])
@jwt_required()
def edit_user():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    email = request.json.get("email")
    password = request.json.get("password")
    db.session.add(user)
    db.session.commit()
    return jsonify("User successfully updated")

@api.route("/interaction", methods=["PUT"])
@jwt_required()
def edit_interaction():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    application = request.json.get("application_id")
    interaction_id = request.json.get("interaction_id")
    interaction = Interaction.query.filter_by(user_id = user.id, application_id = application, id = interaction_id).first()
    interaction_type = request.json.get("interaction_type")
    date = request.json.get("date")
    comment = request.json.get("comment")
    interaction.comment = comment
    interaction.date = date
    interaction.interaction_type = interaction_type
    db.session.add(interaction)
    db.session.commit()
    return jsonify("Interaction successfully updated")

@api.route("/application", methods=["PUT"])
@jwt_required()
def edit_application():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    application_id = request.json.get("application_id")
    application = Application.query.filter_by(user_id = user.id, id = application_id).first()
    job_title = request.json.get("job_title")
    company = request.json.get("company")
    date_created = request.json.get("date_created")
    location = request.json.get("location")
    req_id = request.json.get("req_id")
    description = request.json.get("description")
    job_status = request.json.get("job_status")
    experience = request.json.get("experience")
    job_type = request.json.get("job_type")
    application.job_title = job_title
    application.company = company
    application.date_created = date_created
    application.location = location
    application.req_id = req_id
    application.description = description
    application.job_status = job_status
    application.experience = experience
    application.job_type = job_type
    db.session.add(application)
    db.session.commit()    
    return jsonify("Application successfully updated")

@api.route("/note", methods=["PUT"])
@jwt_required()
def edit_note():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    application_id = request.json.get("application_id")
    note_id = request.json.get("note_id")
    note_text = request.json.get("note_text")
    note = Note.query.filter_by(user_id = user.id, application_id = application_id, id = note_id).first()
    note.note_text = note_text
    db.session.add(note)
    db.session.commit()
    return jsonify("Note successfully updated")

@api.route("/link", methods=["PUT"])
@jwt_required()
def edit_link():
    current_user_id=get_jwt_identity()
    user = User.query.get(current_user_id)
    link_id = request.json.get("link_id")
    link_type = request.json.get("link_type")
    link_url = request.json.get("link_url")
    link = Link.query.filter_by(user_id = user.id, id = link_id).first()
    link.link_type = link_type
    link.link_url = link_url
    db.session.add(link)
    db.session.commit()
    return jsonify("Note successfully updated")