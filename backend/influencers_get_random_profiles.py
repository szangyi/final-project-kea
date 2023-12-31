from bottle import get, request, response
import json
import database_access_functions
import helper_functions

# GETTING LIMITED RANDOM INFLUENCERS PROFILES #
@get("/api/random-profiles")
def _():
    try:
        # VARIABLES ##########################
        num_profiles = request.query.numProfiles


        # VALIDATION ##########################
        selected_user_db = helper_functions._validation_function()


        # DATABASE CONNECTION #################
        db_config = helper_functions._db_config()
        

        if selected_user_db is not None:
            user_ID = selected_user_db[0]
            random_profiles = database_access_functions._get_random_profiles(user_ID, db_config, int(num_profiles))
            random_profiles_json = json.dumps(random_profiles, default=helper_functions._datetime_handler)
            return random_profiles_json
        else:
            response.status = 400
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)
        
    
