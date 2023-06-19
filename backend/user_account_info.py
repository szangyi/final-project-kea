from bottle import get, response
import json
import helper_functions


# GETTING USER ACCOUNT INFO # 
@get("/api/account-info")
def _account_info():
    try:
        
        # DATABASE ##########################
        selected_user_db = helper_functions._validation_function()

        if selected_user_db is not None:
            user_info = {
                "user_ID": selected_user_db[0],
                "username": selected_user_db[1],
                "firstName": selected_user_db[2],
                "lastName": selected_user_db[3],
                "userImage": selected_user_db[6],
                "user_email": selected_user_db[4],
                "user_password": selected_user_db[5],                
            }
                
            response.status = 200
            user_info_dumps = json.dumps(user_info)
            return user_info_dumps
        else:
            response.status = 400
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)

