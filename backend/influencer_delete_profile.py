from bottle import post, request, response
import mysql.connector
import helper_functions
import database_access_functions

@post("/api/delete-profile")
def _delete_profile():
    
    # VARIABLES ##########################

    request_influencer_ID = request.json
    influencer_ID = request_influencer_ID["influencerid"]
    
    # VALIDATION ##########################
    selected_user_db = helper_functions._validation_function()

    # DATABASE CONNECTION ##########################
    db_config = helper_functions._db_config()

    if selected_user_db is not None:
        database_access_functions._delete_influencer_profile(influencer_ID, db_config)
    else:
        response.status = 400
        return "Profile couldn't be deleted"
    
