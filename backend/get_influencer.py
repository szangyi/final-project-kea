from bottle import get, request, response, post
import json
import jwt
import database_connection
import mysql.connector
import g
from datetime import datetime

@get("/api/get-influencer")
def _():
    token_request = request.headers.get('Authorization')
    token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    influencer_profile_data = {}
    influencer_profile_data_json = []
    
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
        sql_check_influencer = "SELECT * FROM influencers_profile WHERE user_ID = %s"
        var_check_influencer = (user_id,)
        cursor.execute(sql_check_influencer, var_check_influencer)
        profiles = cursor.fetchall()
        db.commit()
                

    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()

    
    if profiles == []:
        influencer_profile_data = {
            "result": "no profile"
        }
        influencer_profile_data_json = json.dumps(influencer_profile_data)

    else:
        influencer_profile_data = profiles
        influencer_profile_data_json = json.dumps(influencer_profile_data, default=datetime_handler)

    
    return influencer_profile_data_json

def datetime_handler(obj):
    if isinstance(obj, datetime):
        return obj.strftime('%Y-%m-%d %H:%M:%S')
    raise TypeError(f'Object of type {type(obj)} is not JSON serializable')