from bottle import  post, request, redirect, response
import g
import uuid
import mysql.connector
import bcrypt
import database_connection
import json

@post("/signup")
def _signup():
    
    request_user_data = request.json
    
    user_ID = str(uuid.uuid4())
    user_first_name = request_user_data["firstName"]
    user_last_name = request_user_data["lastName"]
    user_location = ""
    user_email = request_user_data["email"]
    user_password = request_user_data["password"]
    user_image_ID = ""
    user_interest_tags = '{}'
    is_influencer = False
    message_json = None
    message = None

    salt = bcrypt.gensalt()
    password_encode = user_password.encode('utf-8')
    password_hashed = bcrypt.hashpw(password_encode, salt)


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

        sql = """ SELECT * FROM users WHERE user_email = %s"""
        cursor.execute(sql, (user_email,))
        user_exist = cursor.fetchone()
        db.commit()

        
        if not user_exist:
            sql = """INSERT INTO users (user_ID, user_first_name, user_last_name, user_location, user_email, user_password, user_image_ID, user_interest_tags, is_influencer ) VALUES ( %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
            val = (user_ID, user_first_name,user_last_name, user_location, user_email, password_hashed, user_image_ID, user_interest_tags, is_influencer, )
            cursor.execute(sql, val)
            db.commit()
            
            message = {
                "message": "success"
            }
        else:
            message = {
                "message": "already exist"
            }
            
        response.status = 200

    except Exception as ex:
        print(ex)
        response.status = 500

    finally:
        db.close()
    
    
    message_json = json.dumps(message)
    return message_json
    




    

        
            