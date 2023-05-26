from bottle import get, request, response
import jwt
import g
import database_connection
import mysql.connector
import json



@get("/api/account-info")
def _account_info():
    token_request = request.headers.get('Authorization')
    
    token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    
    try:
        # import production
        db_config = database_connection.PRODUCTION_CONN

    except Exception as ex:
        print(ex)
        db_config = database_connection.DEVELOPMENT_CONN
    
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_login = """SELECT * FROM users WHERE user_email =%s"""
        var = (user_email,)
        cursor.execute(sql_login, var)
        user = cursor.fetchone()
        db.commit()
        response.status = 200

    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()
    
    
    user_info = {
        "username": user[1],
        "firstName": user[2],
        "lastName": user[3],
        "userImage": user[7]
    }
    
    user_info_dumps = json.dumps(user_info)
    
    return user_info_dumps