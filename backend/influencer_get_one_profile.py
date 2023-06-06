from bottle import post, request, response
import json
import jwt
import g
import helper_functions
import database_helper_functions
import helper_functions

# GETTING ONE INFLUENCER PROFILE ##########################
@post("/api/get-profile")
def _():
    
    # VARIABLES ##########################
    request_username = request.json
    token_request = request.headers.get('Authorization')
    
    username = request_username["username"]["username"]
    profile_response = {}
    profile = []
    other_profiles = []
    
    # VALIDATION ##########################
    user_email_validated = helper_functions._token_validator(token_request)

    
    # DATABASE CONNECTION ##########################

    db_config = helper_functions._db_config()
    selected_user_db = database_helper_functions._get_user(user_email_validated, db_config)

    if selected_user_db is not None:
        profile = database_helper_functions._get_one_influencer_profile(username, db_config)
        user_ID = profile[1]
        
        other_profiles = database_helper_functions._get_other_influencer_profiles(user_ID, username, db_config)
        
        profile_response = {
            "profileData": profile,
            "otherProfiles": other_profiles
        }
        
        profile_json = json.dumps(profile_response, default=helper_functions._datetime_handler)
        
        response.status = 200
        return profile_json
    else:
        response.status = 400
