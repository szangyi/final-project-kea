from bottle import get, request, response
import json
import jwt
import database_connection
import mysql.connector
import g
from datetime import datetime

@get("/api/profiles")
def _():
        
    token_request = request.headers.get('Authorization')
    print(token_request)
    token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    # user_email = 'a@a.commm'


    
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
        user_ID = user[0]
        db.commit()
        
        # sql_check_influencer = "SELECT * FROM influencers_profile "
        # cursor.execute(sql_check_influencer)
        # profiles = cursor.fetchall()
        # db.commit()

        # Query to retrieve influencers with favorite status
        sql_get_influencers = """
        SELECT influencers_profile.*, 
            IF(favorites.influencer_ID IS NULL, 0, 1) AS is_favorite
        FROM influencers_profile
        LEFT JOIN favorites
            ON influencers_profile.influencer_ID = favorites.influencer_ID
            AND favorites.user_ID = %s
        """
        var = (user_ID,)  # Use user ID instead of email
        cursor.execute(sql_get_influencers, var)
        profiles = cursor.fetchall()
                

    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()

    profiles_json = json.dumps(profiles, default=datetime_handler)
    return profiles_json

def datetime_handler(obj):
    if isinstance(obj, datetime):
        return obj.strftime('%Y-%m-%d %H:%M:%S')
    raise TypeError(f'Object of type {type(obj)} is not JSON serializable')