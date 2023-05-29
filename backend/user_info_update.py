# from urllib import response
from bottle import get, post, request, response
import g
import mysql.connector
import database_connection
import uuid
import time 
import jwt
import json


##############################
@post("/api/user_info_update")
def _user_info_update():
    
    token_request = request.headers.get('Authorization')
    token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    # user_email = "szangyi@gmail.com"

# VARIABLES ###########################
    request_user_data = request.json
    user_first_name_update = request_user_data["firstName"]
    user_last_name_update = request_user_data["lastName"]
    username_update = request_user_data["username"]
    
# VALIDATION ##########################
    validation_errors = []
    message = {
        "message": "Initial"
    }

    user_first_name_update, error_fn = g._is_first_name(user_first_name_update)
    if error_fn:
        validation_errors.append(error_fn)

    user_last_name_update, error_ln = g._is_last_name(user_last_name_update)
    if error_ln:
        validation_errors.append(error_ln)

    username_update, error_un = g._is_username(username_update)
    if error_un:
        validation_errors.append(error_un)

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
        username_current = user[1]

        sql = """SELECT * FROM users WHERE username = %s AND username <> %s"""
        cursor.execute(sql, (username_update, username_current))
        user_exist = cursor.fetchone()
        db.commit()


        if not user_exist:
            ## update user
            sql=""" 
                UPDATE users 
                SET user_first_name =%s,
                user_last_name =%s,
                username =%s
                WHERE user_ID=%s
                """   

            val = (user_first_name_update, user_last_name_update, username_update, user_ID)   
            cursor.execute(sql, val)
            db.commit()

            message = {
                "message": "Userdata change succeeded"
            }
            response.status = 200
        else:
            message = {
                "message": "User already exist"
            }
            response.status = 409 # Conflict

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