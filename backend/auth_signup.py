from bottle import  post, request, redirect, response
from bottle import HTTPResponse

import g
import uuid
import mysql.connector
import bcrypt
import database_connection
import database_helper_functions
import helper_functions
import json
import time
import os


# SIGNUP ##################################
@post("/api/signup")
def _signup():
    
    # VARIABLES ##########################

    token_request = request.headers.get('Authorization')

    request_user_data = request.json
    user_ID = str(uuid.uuid4())
    user_first_name = request_user_data["firstName"]
    user_last_name = request_user_data["lastName"]
    user_location = ""
    user_email = request_user_data["email"]
    username = request_user_data["username"]
    user_password = request_user_data["password"]
    user_created_at = str(int(time.time()))
    user_image_ID = ""
    user_interest_tags = '{}'
    is_influencer = False
    message_json = None
    message = None

    salt = bcrypt.gensalt()
    password_encode = user_password.encode('utf-8')
    password_hashed = bcrypt.hashpw(password_encode, salt)

    

    # VALIDATION ##########################

    validation_errors = []

    user_first_name, error_fn = g._is_first_name(user_first_name)
    if error_fn:
        validation_errors.append(error_fn)

    user_last_name, error_ln = g._is_last_name(user_last_name)
    if error_ln:
        validation_errors.append(error_ln)

    username, error_un = g._is_username(username)
    if error_un:
        validation_errors.append(error_un)

    user_email, error_e = g._is_item_email(user_email)
    if error_e:
        validation_errors.append(error_e)

    user_password, error_pw = g._is_password(user_password)
    if error_pw:
        validation_errors.append(error_pw)

    if validation_errors:
        return g._send(400, validation_errors)


    user_email_validated = helper_functions._token_validator(token_request)


    # DATABASE CONNECTION ##########################

    db_config = helper_functions._db_config()

    user_exist_db = database_helper_functions._user_exist(user_email_validated, username, db_config)

    if not user_exist_db:
        user_data = {
            "user_ID": user_ID,
            "username": username,
            "user_first_name": user_first_name,
            "user_last_name": user_last_name,
            "user_location": user_location,
            "user_email": user_email,
            "user_password": password_hashed,
            "user_image_ID": user_image_ID, 
            "user_interest_tags": user_interest_tags, 
            "is_influencer": is_influencer, 
            "user_created_at": user_created_at,
        }

        database_helper_functions._signup(user_data, db_config)
        response.status = 200
    else:
        message = {
            "error": "User already exists"
        }
        response.status = 409 # Conflict
        response.body = "user already exists"
    
    message_json = json.dumps(message)
    return message_json
    




    

        
            