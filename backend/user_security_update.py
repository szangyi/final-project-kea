# from urllib import response
from bottle import get, post, request, response
import g
import mysql.connector
import database_connection
import bcrypt
import time 
import jwt
import json


##############################
@post("/api/user_security_update")
def _user_security_update():
    
    token_request = request.headers.get('Authorization')
    token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    # user_email = "szangyi@gmail.com"



# VARIABLES ###########################
    request_user_data = request.json
    user_email_update = request_user_data["email"]
    user_password_update = request_user_data["password"]
    message_json = None
    message = None

    salt = bcrypt.gensalt()
    password_encode = user_password_update.encode('utf-8')
    password_hashed = bcrypt.hashpw(password_encode, salt)

    
# VALIDATION ##########################
    validation_errors = []
    message = {
        "message": "Initial"
    }

    user_email_update, error_e = g._is_item_email(user_email_update)
    if error_e:
        validation_errors.append(error_e)

    user_password_update, error_pw = g._is_password(user_password_update)
    if error_pw:
        validation_errors.append(error_pw)

    if validation_errors:
        return g._send(400, validation_errors)


    try:
        import production
        db_config = database_connection.PRODUCTION_CONN

    except Exception as ex:
        print(ex)
        db_config = database_connection.DEVELOPMENT_CONN


    try:
        db = mysql.connector.connect(**db_config)
        db.autocommit = False
        cursor = db.cursor()
        
        sql_get_user = """SELECT * FROM users WHERE user_email =%s"""
        var = (user_email,)
        cursor.execute(sql_get_user, var)
        user = cursor.fetchone()
        user_ID = user[0]

        sql = """SELECT * FROM users WHERE user_email = %s AND user_email <> %s"""
        cursor.execute(sql, (user_email_update, user_email))
        user_exist = cursor.fetchone()
        db.commit()


        if not user_exist:
            ## update user
            sql=""" 
                UPDATE users 
                SET user_email =%s,
                user_password =%s
                WHERE user_ID=%s
                """   

            val = (user_email_update, password_hashed, user_ID)   
            cursor.execute(sql, val)
            db.commit()

            message = {
                "message": "Userdata change succeeded"
            }
            
            response.status = 200
            token_auth = _generate_token(user_email)
            return token_auth
        else:
            message = {
                "message": "User already exist"
            }
            token_auth = {
            "error": "something wrong maaan"
            }
            response.status = 409 # Conflict
            return token_auth

################ COOKIE ################
        # encoded_jwt = jwt.encode({"uuid4": user_session_id, "user_email":user_email_update}, "secret key", algorithm="HS256")
        # response.set_cookie("user_email", user_email_update, secret=g.COOKIE_SECRET)
        # response.set_cookie("encoded_jwt", encoded_jwt)

        # ## current user + current user's image
        # sql_user=""" SELECT * 
        # FROM users
        # JOIN users_images
        # WHERE user_email =%s
        # AND users.user_id = users_images.fk_user_id
        # """
        # cur.execute(sql_user, (user_email,))
        # user = cur.fetchone()

        # db.commit()

################ RETURN ################
        # return dict(
        #     user=user,
        #     error=error,
        #     tabs=g.TABS_LOGGEDIN,
        #     people=g.PEOPLE,
        #     trends=g.TRENDS
        #     )    

    except Exception as ex:
        print(ex)
        response.status = 500

    finally:
        db.close()

    message_json = json.dumps(message)
    return message_json






def _generate_token(email):
    
    payload = {'email': email}
    token_auth = jwt.encode(payload, g.SECRET_KEY, algorithm='HS256')
    
    token_json = {
        "jwt": token_auth
    }
    
    token_auth_json = json.dumps(token_json)
    
    
    return token_auth_json