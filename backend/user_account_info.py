from bottle import get, request, response
import mysql.connector
import json
import helper_functions
import database_access_functions

# USER ACCOUNT INFO ##########################
@get("/api/account-info")
def _account_info():
    
        
    # VALIDATION ##########################
    selected_user_db = helper_functions._validation_function()


    if selected_user_db is not None:
        user_info = {
            "username": selected_user_db[1],
            "firstName": selected_user_db[2],
            "lastName": selected_user_db[3],
            "userImage": selected_user_db[7]
        }
            
        response.status = 200
        user_info_dumps = json.dumps(user_info)
        return user_info_dumps
    else:
        response.status = 400
