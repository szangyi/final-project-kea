from bottle import request, redirect, post, response
import g 
import uuid
import mysql.connector
import bcrypt
import helper_functions
import database_access_functions


@post("/api/login")
def _login():
    try:
        # VARIABLES ##########################

        request_user_data = request.json
        user_email = request_user_data["email"]
        user_password = request_user_data["password"]

        password_encode = user_password.encode('utf-8')
        
        # VALIDATION ##########################
        
        validation_errors = []

        user_email, error_e = g._is_item_email(user_email)
        if error_e:
            validation_errors.append(error_e)

        user_password, error_pw = g._is_password(user_password)
        if error_pw:
            validation_errors.append(error_pw)

        if validation_errors:
            return g._send(400, validation_errors)


        # DATABASE ##########################

        db_config = helper_functions._db_config()
        check_password = database_access_functions._user_exist_email(user_email, db_config)
        if check_password:
            password_db = check_password[6]
            password_db_encoded = password_db.encode('utf-8')
            password_matched = bcrypt.checkpw(password_encode, password_db_encoded)
            print(password_matched)

            if password_matched:
                user = database_access_functions._login(user_email, password_db, db_config)
                
                if user:
                    token_auth = helper_functions._generate_token(user_email)
                    response.set_cookie('token', token_auth["jwt"],  secret=g.COOKIE_SECRET, path="/", httponly=True)
                    response.status = 200
                else:
                    response.status = 400
                    return  "wrong credentials"
            else:
                response.status = 400
        else:
            response.status = 400
            return  "wrong credentials"
    except Exception as ex:
        response.status = 500
        return str(ex)







    