from bottle import post, request, response
import jwt
import g
import uuid
import time
import json
import database_access_functions
import helper_functions
import os

# CREATING INFLUENCER PROFILE ##########################
@post("/api/update-basic-info")
def _update_basic_info():
    try:
        request_user_data = request.json
        user_first_name = request_user_data["firstName"]
        user_last_name = request_user_data["lastName"]
        username = request_user_data["username"]
    
        
        db_config = helper_functions._db_config()
        selected_user_db = helper_functions._validation_function()
        
        if selected_user_db is not None:
            if selected_user_db[1] != username:
                user_email = selected_user_db[5]
                check_user = database_access_functions._user_exist(user_email, username , db_config )
                if check_user is None:
                    _update_user_function(selected_user_db,user_first_name, user_last_name, username, db_config )
                else: 
                    response.status = 409
            else:
                _update_user_function(selected_user_db,user_first_name, user_last_name, username, db_config )

        else:
            response.status = 400
            return  "User info couldn't be updated"
       
    

    except Exception as ex:
        print(ex)
        return str(ex)
    
def _update_user_function(selected_user_db,user_first_name, user_last_name, username, db_config):
    user_id = selected_user_db[0]
    user_basic_data = {
        "user_first_name": user_first_name,
        "user_last_name": user_last_name,
        "username": username,
    }
    
    database_access_functions._update_user_basic_info(user_id, user_basic_data, db_config)
    response.status = 200