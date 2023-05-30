from bottle import get, request, response
import json
import jwt
import database_connection
import mysql.connector
import g
from datetime import datetime

@get("/api/favorites_get_all")
def _():
        
    # token_request = request.headers.get('Authorization')
    # print(token_request)
    # token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    # user_email = token_data["email"]
    # print(user_email)
    user_email = 'a@a.commm'
    

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

        # sql_get_favorite_influencers = """
        # SELECT influencers_profile.*
        #     FROM favorites
        #     JOIN influencers_profile on favorites.influencer_ID = influencers_profile.influencer_ID
        #     WHERE favorites.user_ID = %s
        # """

        sql_get_favorite_influencers = """
        SELECT influencers_profile.*, 1 AS is_favorite
            FROM influencers_profile
            WHERE influencers_profile.influencer_ID IN (
                SELECT influencer_ID FROM favorites WHERE user_ID = %s
            )
        """
        
        var = (user_ID,)
        cursor.execute(sql_get_favorite_influencers, var)
        favorite_influencers = cursor.fetchall()

        # Commit the changes
        db.commit()

        response.content_type = 'application/json'
        # favorite_influencers_json = json.dumps(favorite_influencers, default=datetime_handler)
        favorite_influencers_json = json.dumps(favorite_influencers, default=datetime_handler)   
        return favorite_influencers_json

        
    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()

    
def datetime_handler(obj):
    if isinstance(obj, datetime):
        return obj.strftime('%Y-%m-%d %H:%M:%S')
    raise TypeError(f'Object of type {type(obj)} is not JSON serializable')