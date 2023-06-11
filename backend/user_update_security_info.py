from bottle import post, request, response
import database_access_functions
import helper_functions
import bcrypt
import g

@post("/api/update-security-info")
def _update_security_info():
    try:
        # VARIABLES ##########################
        request_user_data = request.json
        user_email = request_user_data["email"]
        password = request_user_data["password"]
        password_new = request_user_data["passwordNew"]
        
        # VALIDATION ##########################
        validation_errors = []

        user_email, error_e = g._is_item_email(user_email)
        if error_e:
            validation_errors.append(error_e)

        password, error_pw = g._is_password(password)
        if error_pw:
            validation_errors.append(error_pw)
            
        password_new, error_pw = g._is_password(password_new)
        if error_pw:
            validation_errors.append(error_pw)

        if validation_errors:
            return g._send(400, validation_errors)
        
        # FUNCTIONS ##########################
        db_config = helper_functions._db_config()
        selected_user_db = helper_functions._validation_function()
        if selected_user_db is not None:
            user_id = selected_user_db[0]            
            check_email = selected_user_db[4]
            if check_email != user_email:
                check_user = database_access_functions._user_exist_email(user_email , db_config )
                if check_user is None:
                    print(user_email)
                    _check_password(user_id,check_email, user_email,password, password_new, db_config)
                    _update_cookie_value(user_email)
                else:
                    response.status = 409       
            else:
                _check_password(user_id,check_email, user_email,password, password_new, db_config)
        else:
            response.status = 400
            return  "User info couldn't be updated"
        
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)

def _update_security_info(user_id, user_email, password_hashed_new, db_config):
    user_security_data = {
        "user_id": user_id,
        "user_email": user_email,
        "user_password_new": password_hashed_new,
    }
    
    database_access_functions._update_user_security_info(user_security_data, db_config)
    response.status = 200

def _check_password(user_id, check_email, user_email, password, password_new, db_config):
    salt = bcrypt.gensalt()
    password_encode = password.encode('utf-8')
    password_hashed = bcrypt.checkpw(password_encode, salt)
    check_password = database_access_functions._login(check_email, password_hashed, db_config)

        
    check_password_db = check_password[5]
    
    password_db = check_password_db.encode('utf-8')
    password_matched = bcrypt.checkpw(password_encode, password_db)
    print(password_matched)
    if password_matched:
        password_encode_new = password_new.encode('utf-8')
        password_hashed_new = bcrypt.hashpw(password_encode_new, salt)
        _update_security_info(user_id, user_email, password_hashed_new, db_config)
        response.status = 200
    else:
        response.status = 401

def _update_cookie_value(user_email):
    token_auth = helper_functions._generate_token(user_email)
       
    response.set_cookie('token', token_auth["jwt"],  secret=g.COOKIE_SECRET, path="/", httponly=True)
    response.status = 200


