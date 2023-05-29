from bottle import request, redirect, post, response
import g 
import uuid
import mysql.connector
import bcrypt
import helper_functions


@post("/api/login")
def _login():
    
    # VARIABLES ##########################

    request_user_data = request.json
    user_email = request_user_data["email"]
    user_password = request_user_data["password"]

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
    
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_login = """SELECT * FROM users WHERE user_email =%s AND user_password=%s """
        var = (user_email, password_hashed)
        cursor.execute(sql_login, var)
        user = cursor.fetchone()

        db.commit()
        response.status = 200

    except Exception as ex:
        response.status = 500
        print(ex)

    finally:
        db.close()

    if user:
        token_auth = helper_functions._generate_token(user_email)  
        response.status = 200
    else:
        token_auth = {
            "error": "Wrong credentials"
        }
        response.status = 400
        return token_auth






    