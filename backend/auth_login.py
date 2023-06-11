from bottle import request, post, response
import g 
import bcrypt
import helper_functions
import database_helper_functions
import html


@post("/api/login")
def _login():
    
    # VARIABLES ##########################

    request_user_data = request.json
    user_email = html.escape(request_user_data["email"])
    user_password = html.escape(request_user_data["password"])

    salt = bcrypt.gensalt()
    password_encode = user_password.encode('utf-8')
    password_hashed = bcrypt.checkpw(password_encode, salt)
    

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
    user = database_helper_functions._login(user_email, password_hashed, db_config)
    
    if user:
        token_auth = helper_functions._generate_token(user_email)
        response.set_cookie('token', token_auth["jwt"],  secret=g.COOKIE_SECRET, path="/", httponly=True)
        response.status = 200
    else:
        response.status = 400
        return  "wrong credentials"






    