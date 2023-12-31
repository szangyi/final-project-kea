from bottle import post, request, response
import mysql.connector
import helper_functions
import database_access_functions

# DELETING INFLUENCER PROFILE #
@post("/api/delete-profile")
def _delete_profile():
    try:
        # VARIABLES ##########################
        request_influencer_ID = request.json
        influencer_ID = request_influencer_ID["influencerid"]
        
        # VALIDATION #########################
        selected_user_db = helper_functions._validation_function()


        # DATABASE CONNECTION ################
        db_config = helper_functions._db_config()
        if selected_user_db is not None:
            influencer_exists = database_access_functions._influencer_exists(influencer_ID, db_config) 
            
            if influencer_exists:
                db = mysql.connector.connect(**db_config)

                cursor = db.cursor()
                db.start_transaction()
                database_access_functions._delete_influencer_profile(influencer_ID, cursor)
                
                user_id = selected_user_db[0]

                profiles = database_access_functions._get_all_influencer_profiles(user_id, db_config)
                if profiles == []:
                    is_influencer = False
                    database_access_functions._update_user_is_influencer(user_id, is_influencer, cursor)
                else:
                    pass
                
                db.commit()
                response.status = 200
            else:
                response.status = 400
        else:
            response.status = 400
    
    except Exception as ex:
        print(ex)
        response.status = 500
        db.rollback()
        return str(ex)
    finally:
        db.close()

