from bottle import post, request, response
import mysql.connector
import helper_functions
import database_access_functions

# DELETING USER ACCOUNT #
@post("/api/delete-user-account")
def _delete_user_account():
    try:
        
        # VALIDATION #########################
        selected_user_db = helper_functions._validation_function()

        # DATABASE CONNECTION ################
        db_config = helper_functions._db_config()
        if selected_user_db is not None:
            user_ID = selected_user_db[0]
            delete_user = database_access_functions._delete_user_account(user_ID, db_config)
            if delete_user is not None:
                response.delete_cookie('token', path='/')
                response.status = 200
            else:
                response.status = 400
        else:
            response.status = 400
    
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)

