from bottle import get, request, response
import json
import helper_functions
import database_access_functions

# USER COLLECTION WITH FAVORITES #
@get("/api/favorites-get-all")
def _():
    try:
        db_config = helper_functions._db_config()
        selected_user_db = helper_functions._validation_function()

        if selected_user_db is not None:
            user_id = selected_user_db[0]
            all_favorites = database_access_functions._get_all_favorites(user_id, db_config)
            favorite_influencers_json = json.dumps(all_favorites, default=helper_functions._datetime_handler)   
            
            response.content_type = 'application/json'
            response.status = 200
            return favorite_influencers_json
        else:
            response.status = 400
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)
    


        

     