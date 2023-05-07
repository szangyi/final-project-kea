from bottle import request, redirect, post, response
import g 
import uuid
import mysql.connector
import bcrypt
import database_connection
import jwt
import json


@post("/login")
def _login():
    
    print("I am here")
    request_user_data = request.json
    user_email = request_user_data["email"]
    # user_password = request_user_data["password"]
    # user_session_id = str(uuid.uuid4())

    
    # response.set_header("Cache-Control", "no-cache, no-store, must-revalidate")

    # user_password = request.forms.get("user_password").encode("utf-8")
    # salt = bcrypt.gensalt()
    # password_hashed = bcrypt.checkpw(user_password, salt)

    # response.set_cookie("user_email", user_email, secret=g.COOKIE_SECRET)
    # response.set_cookie("session", user_session_id)
    print(request_user_data)
    print(user_email)
    
    if user_email == "a@gmail.com":
        token_auth = _generate_token("a@gmail.com")
        return token_auth
    else:
        token_auth = {
            "error": "Wrong credentials"
        }
        return token_auth



    # IF TOKEN IS NOT GENERATED RETURN AN ERRO

    # try:
    #     import production
    #     db_config = database_connection.PRODUCTION_CONN

    # except Exception as ex:
    #     print(ex)
    #     db_config = database_connection.DEVELOPMENT_CONN

    # try:
    #     db = mysql.connector.connect(**db_config)
    #     cursor = db.cursor()
    #     sql_login = """SELECT * FROM users WHERE user_email =%s AND user_password=%s """
    #     var = (user_email, password_hashed)
    #     cursor.execute(sql_login, var)
    #     users = cursor.fetchone()

    #     sql_session= """ INSERT INTO sessions (session_id, session_user_email) VALUES (%s,%s)  """
    #     val_session = (user_session_id, user_email,)
    #     cursor.execute(sql_session, val_session)

    #     db.commit()
    #     response.status = 200

    # except Exception as ex:
    #     response.status= 500
    #     print(ex)

    # finally:
    #     db.close()
    

def _generate_token(email):
    
    payload = {'email': email}
    token_auth = jwt.encode(payload, g.SECRET_KEY, algorithm='HS256')
    print(token_auth)
    
    token_json = {
        "jwt": token_auth
    }
    
    token_auth_json = json.dumps(token_json)
    
    
    return token_auth_json
     


    