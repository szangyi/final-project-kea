from bottle import get, request, response
import json
import database_access_functions
import helper_functions

# GETTING ALL EXISTING INFLUENCERS PROFILES #
@get("/api/profiles")
def _():
    try:
        # VALIDATION ##########################
        selected_user_db = helper_functions._validation_function()


        # DATABASE CONNECTION #################
        db_config = helper_functions._db_config()
        
        if selected_user_db is not None:
            user_id = selected_user_db[0]
            profiles = database_access_functions._get_all_profiles(db_config, user_id)
            profiles_json = json.dumps(profiles, default=helper_functions._datetime_handler)
            response.status = 200
            return profiles_json
        else:
            response.status = 400
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)


