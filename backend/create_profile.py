from bottle import post, request, response
import jwt
import mysql.connector
import database_connection
import g
import uuid
import time

@post("/create-profile")
def _():
    request_user_data = request.json
    token_request = request.headers.get('Authorization')
    token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    
    influencer_ID = str(uuid.uuid4())
    influencer_username = request_user_data["username"]
    influencer_bio_description = request_user_data["bioDescription"]
    influencer_website = request_user_data["website"]
    influencer_instagram = request_user_data["instagram"]
    influencer_youtube = request_user_data["youTube"]
    influencer_tiktok = request_user_data["tikTok"]
    influencer_tags = request_user_data["tags"]
    influencer_share_link = ""
    profile_created_at = str(int(time.time()))

    
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
        
        sql_create_profile = """INSERT INTO influencers_profile (influencer_ID, user_ID, influencer_username, influencer_bio_description, influencer_website, influencer_instagram, influencer_youtube, influencer_tiktok, influencer_tags, influencer_share_link, profile_created_at ) VALUES (%s, %s,%s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        val_create_profile = (influencer_ID,user_id, influencer_username,influencer_bio_description, influencer_website, influencer_instagram, influencer_youtube, influencer_tiktok, influencer_tags, influencer_share_link, profile_created_at )
        cursor.execute(sql_create_profile, val_create_profile)
        db.commit()
        
        
                

    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()

    
    