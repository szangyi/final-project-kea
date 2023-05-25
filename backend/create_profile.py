from bottle import post, request, response
import jwt
import mysql.connector
import database_connection
import g
import uuid
import time
import json
import os


@post("/api/create-profile")
def _():

    token_request = request.headers.get('Authorization')
    token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    
    influencer_ID = str(uuid.uuid4())
    influencer_username = request.forms.get("username")
    influencer_bio_description = request.forms.get("bio")
    influencer_location = request.forms.get("location")
    influencer_website = request.forms.get("website")
    influencer_instagram = request.forms.get("instagram")
    influencer_youtube = request.forms.get("youTube")
    influencer_tiktok = request.forms.get("tikTok")
    influencer_tags_list =request.forms.get("hashtag")
    influencer_tags  = json.dumps(influencer_tags_list)
    influencer_category = request.forms.get("category")
    profile_image_delete = request.files.get("image")
    

    profile_created_at = str(int(time.time()))

    image_id = str(uuid.uuid4())

        
  
    
    if profile_image_delete is not None:
        filename,file_extension = os.path.splitext(profile_image_delete.filename)


        image_name =f"{image_id}{file_extension}"
        profile_image_delete.save(f"images/profile_images/{image_name}")

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
        
        sql_create_profile = """INSERT INTO influencers_profile (influencer_ID, user_ID, influencer_username, influencer_bio_description, influencer_location, influencer_website, influencer_instagram, influencer_youtube, influencer_tiktok, influencer_tags, influencer_category, profile_image_delete, profile_created_at ) VALUES (%s,%s, %s,%s, %s,%s, %s, %s, %s, %s, %s, %s, %s)"""
        val_create_profile = (influencer_ID,user_id, influencer_username,influencer_bio_description, influencer_location, influencer_website, influencer_instagram, influencer_youtube, influencer_tiktok, influencer_tags,influencer_category, image_name, profile_created_at )
        cursor.execute(sql_create_profile, val_create_profile)
        db.commit()
                

    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()

    
