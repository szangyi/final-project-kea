from bottle import get, request, response, post
import json
import jwt
import g
import helper_functions
import database_access_functions

# GETTING ALL INFLUENCERS PROFILES ##########################
@get("/api/get-influencer-profiles")
def _():
    try:
        # VARIABLES ##########################
        influencer_profile_data = {}
        influencer_profile_data_json = []
        
        # VALIDATION ##########################
        selected_user_db = helper_functions._validation_function()
        
        # DATABASE CONNECTION ##########################
        db_config = helper_functions._db_config()


        if selected_user_db is not None:
            user_id = selected_user_db[0]
            profiles = database_access_functions._get_all_influencer_profiles(user_id, db_config)
            if profiles == []:
                influencer_profile_data = {
                    "result": "no profile"
                }
                influencer_profile_data_json = json.dumps(influencer_profile_data)

            else:
                influencer_profile_data = profiles
                influencer_profile_data_json = json.dumps(influencer_profile_data, default=helper_functions._datetime_handler)
            
            response.status = 200
            return influencer_profile_data_json
        else:
            response.status = 400
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)


