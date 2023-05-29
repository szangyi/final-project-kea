from bottle import get, request, response
import mysql.connector
import json
import helper_functions
import database_helper_functions

# USER ACCOUNT INFO ##########################
@get("/api/account-info")
def _account_info():
    
    # VARIABLES ##########################
    token_request = request.headers.get('Authorization')
        
    # VALIDATION ##########################
    user_email_validated = helper_functions._token_validator(token_request)

    # DATABASE CONNECTION ##########################
    db_config = helper_functions._db_config()

    selected_user_db = database_helper_functions._get_user(user_email_validated, db_config)

    if selected_user_db is not None:
        user_info = {
            "username": selected_user_db[1],
            "firstName": selected_user_db[2],
            "lastName": selected_user_db[3],
            "userImage": selected_user_db[7]
        }
    
        user_info_dumps = json.dumps(user_info)
        return user_info_dumps
    else:
        response.status = 400
        response.body = "Account info cannot be retrieved"