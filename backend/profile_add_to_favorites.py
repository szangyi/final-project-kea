from bottle import post, request, response
import helper_functions
import database_helper_functions


@post("/api/add-to-favorites")
def _():
    
    # VARIABLES ##########################
    request_data = request.json
    influencer_ID = request_data["influencerID"]
    
    # VALIDATION ##########################
    selected_user_db = helper_functions._validation_function()

    # DATABASE CONNECTION ##########################
    db_config = helper_functions._db_config()
    user_ID = selected_user_db[0]


    if selected_user_db is not None:
        relationship_exist_db = database_helper_functions._check_favorite_relationship(user_ID, influencer_ID, db_config)
        if not relationship_exist_db:
            database_helper_functions._add_to_favorites(user_ID, influencer_ID, db_config)
        else:
            database_helper_functions._remove_from_favorites(user_ID, influencer_ID, db_config)

    else:
        response.status = 400
        response.body = "Could not be added to favorites"
        