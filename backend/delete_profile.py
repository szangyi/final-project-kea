from bottle import post, request, response
import jwt
import mysql.connector
import database_connection
import g
import uuid
import time
import json

@post("/api/delete-profile")
def _delete_profile():
    
    request_influencer_ID= request.json
    data_request = request.headers.get('Authorization')
    token_data = jwt.decode(data_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    influencer_ID = request_influencer_ID["influencerid"]
    
    

    try:
        import production
        db_config = database_connection.PRODUCTION_CONN

    except Exception as ex:
        print(ex)
        db_config = database_connection.DEVELOPMENT_CONN
    
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_get_user = """SELECT * FROM users WHERE user_email =%s"""
        var = (user_email,)
        cursor.execute(sql_get_user, var)
        user = cursor.fetchone()
        
        user_id = user[0]
        
        sql = """ DELETE FROM influencers_profile WHERE influencer_ID=%s"""
        cursor.execute(sql, (influencer_ID,))
        
        db.commit()


    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()

    
