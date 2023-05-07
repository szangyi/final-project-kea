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
    
    request_user_data = request.json
    user_email = request_user_data["email"]
    user_password = request_user_data["password"]

    salt = bcrypt.gensalt()
    password_encode = user_password.encode('utf-8')
    password_hashed = bcrypt.checkpw(password_encode, salt)
    
    
    try:
        import production
        db_config = database_connection.PRODUCTION_CONN

    except Exception as ex:
        print(ex)
        db_config = database_connection.DEVELOPMENT_CONN
    
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
        response.status= 500
        print(ex)

    finally:
        db.close()

    if user:
        token_auth = _generate_token("a@gmail.com")
        return token_auth
    else:
        token_auth = {
            "error": "Wrong credentials"
        }
        return token_auth



def _generate_token(email):
    
    payload = {'email': email}
    token_auth = jwt.encode(payload, g.SECRET_KEY, algorithm='HS256')
    print(token_auth)
    
    token_json = {
        "jwt": token_auth
    }
    
    token_auth_json = json.dumps(token_json)
    
    
    return token_auth_json
     


    