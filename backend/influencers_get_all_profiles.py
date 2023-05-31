from bottle import get, request, response
import json
import database_helper_functions
import helper_functions

# GETTING ALL EXISTING INFLUENCERS PROFILES ##########################
@get("/api/profiles")
def _():
    
    # VARIABLES ##########################
    token_request = request.headers.get('Authorization')
    
    # VALIDATION ##########################
    user_email_validated = helper_functions._token_validator(token_request)

    # DATABASE CONNECTION ##########################
    db_config = helper_functions._db_config()
    
    selected_user_db = database_helper_functions._get_user(user_email_validated, db_config)

    if selected_user_db is not None:
        profiles = database_helper_functions._get_all_profiles(db_config)
        profiles_json = json.dumps(profiles, default=helper_functions._datetime_handler)
        return profiles_json
    else:
        response.status = 400
        response.body = "Profiles couldn't be retrieved"

