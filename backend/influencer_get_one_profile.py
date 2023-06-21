from bottle import get, request, response
import json
import helper_functions
import database_access_functions
import helper_functions

# GETTING ONE INFLUENCER PROFILE ##########################
@get("/api/get-profile")
def _():
    try:
        # VARIABLES ##########################
        username = request.query.get('usernameGet[username]')

        profile_response = {}
        profile = []
        other_profiles = []
        
        # VALIDATION ##########################
        selected_user_db = helper_functions._validation_function()

        
        # DATABASE CONNECTION ##########################

        db_config = helper_functions._db_config()

        if selected_user_db is not None:
            influencer__ID_database = database_access_functions._profile_exist(username, db_config)
            if influencer__ID_database:
                influencer__ID = influencer__ID_database[0]
                profile = database_access_functions._get_one_influencer_profile(influencer__ID, db_config)
                if profile:
                    user_ID = profile[1]
                    
                    other_profiles = database_access_functions._get_other_influencer_profiles(influencer__ID, user_ID, username, db_config)
                    
                    profile_response = {
                        "profileData": profile,
                        "otherProfiles": other_profiles
                    }
                    
                    
                    profile_json = json.dumps(profile_response, default=helper_functions._datetime_handler)
                    print(profile_response)
                    response.status = 200
                    return profile_json
                else:
                    response.status = 400
            else:
                response.status = 400
        else:
            response.status = 400

    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)
        
    