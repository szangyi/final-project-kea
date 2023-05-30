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
    # token_request = request.headers.get('Authorization')
    # token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    # user_email = token_data["email"]
    user_email="a@a.commm"
    # influencer_ID = "5a094132-92e1-4d4a-8098-969add0eb8ae"
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

        # get user
        sql_get_user = """SELECT * FROM users WHERE user_email =%s"""
        var = (user_email,)
        cursor.execute(sql_get_user, var)
        user = cursor.fetchone()        
        user_ID = user[0]
        
        # check if user + influencer combo is already in the database
        sql_check_relationship = """ SELECT * FROM favorites WHERE user_ID = %s AND influencer_ID = %s"""
        # sql_check_relationship = """
        # SELECT *, 1 AS is_favorite FROM favorites 
        # WHERE user_ID = %s AND influencer_ID = %s
        # """
        cursor.execute(sql_check_relationship, (user_ID, influencer_ID))
        relationship_exist = cursor.fetchone()
        db.commit()

        # remove existing relationship from database
        if relationship_exist:
            print('remove fav')
            sql_remove_relationship = """DELETE FROM favorites WHERE user_ID = %s AND influencer_ID = %s"""
            cursor.execute(sql_remove_relationship, (user_ID, influencer_ID))
            db.commit()           
        
        else:
        # insert new favorite relationship to database
            print('add fav')
            sql_save_favorite = """INSERT INTO favorites (influencer_ID, user_ID ) VALUES (%s,%s)"""
            val = (influencer_ID, user_ID, )
            cursor.execute(sql_save_favorite, val)
            db.commit()
                

    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()

