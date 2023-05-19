from bottle import post, request, response
import json
import jwt
import database_connection
import mysql.connector
import g
from datetime import datetime

@post("/api/get-profile")
def _():
        
    request_influencer_ID = request.json
    print(request_influencer_ID)
    token_request = request.headers.get('Authorization')
    token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    influencer_ID = request_influencer_ID["influencerID"]["id"]

    
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
        
        sql_check_influencer = "SELECT * FROM influencers_profile WHERE influencer_ID = %s"
        var_check_influencer = (influencer_ID,)
        cursor.execute(sql_check_influencer, var_check_influencer)
        profile = cursor.fetchall()
        db.commit()
                

    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()

    profile_json = json.dumps(profile, default=datetime_handler)
    return profile_json

def datetime_handler(obj):
    if isinstance(obj, datetime):
        return obj.strftime('%Y-%m-%d %H:%M:%S')
    raise TypeError(f'Object of type {type(obj)} is not JSON serializable')