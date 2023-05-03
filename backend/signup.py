from bottle import  post, request, redirect, response
import g
import uuid
import mysql.connector
import bcrypt
import database_connection

@post("/signup")
def _signup():
    response.set_header("Cache-Control", "no-cache, no-store, must-revalidate")
    
    user_ID = str(uuid.uuid4())
    user_first_name = request.forms.get("user_first_name")
    user_last_name = request.forms.get("user_last_name")
    user_email = request.forms.get("user_email")
    user_password = request.forms.get("user_password").encode("utf-8")
    user_location = ""
    user_image_ID = ""
    user_interest_tags = {}
    
    is_influencer = False
    salt = bcrypt.gensalt()
    password_hashed = bcrypt.hashpw(user_password, salt)

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

        sql = """INSERT INTO users (user_ID, user_first_name, user_last_name, user_location, user_email, user_password, user_image_ID, user_interest_tags, is_influencer ) VALUES ( %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        val = (user_ID, user_first_name,user_last_name, user_location, user_email, password_hashed, user_image_ID, user_interest_tags, is_influencer, )
        cursor.execute(sql, val)

        db.commit()
        response.status = 200

    except Exception as ex:
        print(ex)
        response.status = 500

    finally:
        db.close()
        




    

        
            