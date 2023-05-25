from bottle import post, request, response
import jwt
import mysql.connector
import database_connection
import g
import uuid
import time
import json
import os


@post("/api/add-to-favorites")
def _():
    
    request_data = request.json
    token_request = request.headers.get('Authorization')
    token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    
    influencer_ID = request_data["influencerID"]
    

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
        db.commit()
        
        user_id = user[0]
        
        sql_create_profile = """INSERT INTO favorites (influencer_ID, user_ID ) VALUES (%s,%s)"""
        val_create_profile = (influencer_ID, user_id, )
        cursor.execute(sql_create_profile, val_create_profile)
        db.commit()
                

    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()

    
