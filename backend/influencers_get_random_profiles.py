from bottle import get, request, response
import json
import database_helper_functions
import helper_functions

# GETTING ALL EXISTING INFLUENCERS PROFILES ##########################
@get("/api/random-profiles")
def _():
    
    # VARIABLES ##########################
    token_request = request.headers.get('Authorization')
    num_profiles = request.query.numProfiles

    # VALIDATION ##########################
    user_email_validated = helper_functions._token_validator(token_request)

    # DATABASE CONNECTION ##########################
    db_config = helper_functions._db_config()
    
    selected_user_db = database_helper_functions._get_user(user_email_validated, db_config)

    if selected_user_db is not None:
        random_profiles = database_helper_functions._get_random_profiles(db_config, int(num_profiles))
        random_profiles_json = json.dumps(random_profiles, default=helper_functions._datetime_handler)
        return random_profiles_json
    else:
        response.status = 400
        return "Profiles couldn't be retrieved"

