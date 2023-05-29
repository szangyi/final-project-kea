from bottle import post, request, response
import jwt
import mysql.connector
import database_connection
import g
import helper_functions
import database_helper_functions

# ADDING PROFILE TO FAVORITES ##########################
@post("/api/add-to-favorites")
def _():
    
    # VARIABLES ##########################
    request_data = request.json
    token_request = request.headers.get('Authorization')    
    influencer_ID = request_data["influencerID"]
    
    # VALIDATION ##########################
    user_email_validated = helper_functions._token_validator(token_request)

    # DATABASE CONNECTION ##########################
    db_config = helper_functions._db_config()
    selected_user_db = database_helper_functions._get_user(user_email_validated, db_config)
    
    if selected_user_db is not None:
        user_ID = selected_user_db[0]
        database_helper_functions._add_to_favorites(influencer_ID, user_ID, db_config)
    else:
        response.status = 400
        response.body = "Could not be added to favorites"
        
        
        
    

    
