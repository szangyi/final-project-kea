from bottle import post, request, response
import json
import helper_functions
import database_access_functions
import helper_functions

# GETTING ONE INFLUENCER PROFILE ##########################
@post("/api/get-profile")
def _():
    
    # VARIABLES ##########################
    request_username = request.json
    username = request_username["username"]["username"]
    profile_response = {}
    profile = []
    other_profiles = []
    
    # VALIDATION ##########################
    selected_user_db = helper_functions._validation_function()

    
    # DATABASE CONNECTION ##########################

    db_config = helper_functions._db_config()

    if selected_user_db is not None:
        profile = database_access_functions._get_one_influencer_profile(username, db_config)
        user_ID = profile[1]
        
        other_profiles = database_access_functions._get_other_influencer_profiles(user_ID, username, db_config)
        
        profile_response = {
            "profileData": profile,
            "otherProfiles": other_profiles
        }
        
        profile_json = json.dumps(profile_response, default=helper_functions._datetime_handler)
        
        response.status = 200
        return profile_json
    else:
        response.status = 400
