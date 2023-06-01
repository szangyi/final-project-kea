from bottle import post, request, response
import mysql.connector
import helper_functions
import database_helper_functions

@post("/api/delete-profile")
def _delete_profile():
    
    # VARIABLES ##########################

    request_influencer_ID = request.json
    token_request = request.headers.get('Authorization')
    influencer_ID = request_influencer_ID["influencerid"]
    
    # VALIDATION ##########################
    user_email_validated = helper_functions._token_validator(token_request)

    # DATABASE CONNECTION ##########################
    db_config = helper_functions._db_config()
    selected_user_db = database_helper_functions._get_user(user_email_validated, db_config)

    if selected_user_db is not None:
        database_helper_functions._delete_influencer_profile(influencer_ID, db_config)
    else:
        response.status = 400
        return "Profile couldn't be deleted"
    
