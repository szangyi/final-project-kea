from bottle import get, request, response
import json
import database_helper_functions
import helper_functions

# GETTING ALL EXISTING INFLUENCERS PROFILES ##########################
@get("/api/profiles")
def _():
    
    # VARIABLES ##########################
    cookie_request = helper_functions._cookie_validator()
    
    # VALIDATION ##########################
    user_email_validated = helper_functions._token_validator(cookie_request)

    # DATABASE CONNECTION ##########################
    db_config = helper_functions._db_config()
    
    selected_user_db = database_helper_functions._get_user(user_email_validated, db_config)

    if selected_user_db is not None:
        user_id = selected_user_db[0]
        profiles = database_helper_functions._get_all_profiles(db_config, user_id)
        profiles_json = json.dumps(profiles, default=helper_functions._datetime_handler)
        return profiles_json
    else:
        response.status = 400

