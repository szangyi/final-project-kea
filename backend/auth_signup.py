from bottle import  post, request, response
import g
import uuid
import bcrypt
import database_access_functions
import helper_functions
import time
import html


# SIGNUP #
@post("/api/signup")
def _signup():
    try:
        # VARIABLES ##########################
        request_user_data = request.json
        user_ID = str(uuid.uuid4())
        user_first_name = html.escape(request_user_data["firstName"])
        user_last_name = html.escape(request_user_data["lastName"])
        user_email = html.escape(request_user_data["email"])
        username = html.escape(request_user_data["username"])
        user_password = request_user_data["password"]
        user_created_at = str(int(time.time()))
        user_profile_image = ""
        user_interest_tags = '{}'
        is_influencer = False

        salt = bcrypt.gensalt()
        password_encode = user_password.encode('utf-8')
        password_hashed = bcrypt.hashpw(password_encode, salt)


        # VALIDATION ##########################
        validation_errors = []

        user_first_name, error_fn = g._is_first_name(user_first_name)
        if error_fn:
            validation_errors.append(error_fn)

        user_last_name, error_ln = g._is_last_name(user_last_name)
        if error_ln:
            validation_errors.append(error_ln)

        username, error_un = g._is_username(username)
        if error_un:
            validation_errors.append(error_un)

        user_email, error_e = g._is_item_email(user_email)
        if error_e:
            validation_errors.append(error_e)

        user_password, error_pw = g._is_password(user_password)
        if error_pw:
            validation_errors.append(error_pw)

        if validation_errors:
            return g._send(400, validation_errors)


        # DATABASE CONNECTION ##########################
        db_config = helper_functions._db_config()
        user_exist_db = database_access_functions._user_exist(user_email, username, db_config)

        if not user_exist_db:
            user_data = {
                "user_ID": user_ID,
                "username": username,
                "user_first_name": user_first_name,
                "user_last_name": user_last_name,
                "user_email": user_email,
                "user_password": password_hashed,
                "user_profile_image": user_profile_image, 
                "user_interest_tags": user_interest_tags, 
                "is_influencer": is_influencer, 
                "user_created_at": user_created_at,
            }

            database_access_functions._signup(user_data, db_config)
            response.status = 200
        else:
            response.status = 409 
        
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)
    
    