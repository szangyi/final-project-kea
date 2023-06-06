from bottle import get, request, response
import json
import helper_functions
import database_helper_functions

# USER COLLECTION WITH FAVORITES ##########################
@get("/api/favorites-get-all")
def _():
    
    # VARIABLES ##########################
    token_request = request.headers.get('Authorization')
    
    # VALIDATION ##########################
    user_email_validated = helper_functions._token_validator(token_request)

    # DATABASE CONNECTION ##########################
    db_config = helper_functions._db_config()
    selected_user_db = database_helper_functions._get_user(user_email_validated, db_config)

    if selected_user_db is not None:
        user_id = selected_user_db[0]
        all_favorites = database_helper_functions._get_all_favorites(user_id, db_config)
        favorite_influencers_json = json.dumps(all_favorites, default=helper_functions._datetime_handler)   
        
        response.content_type = 'application/json'
        response.status = 200
        return favorite_influencers_json
    else:
        response.status = 400

        

     