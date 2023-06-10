from bottle import post, request, response
import jwt
import g
import uuid
import time
import json
import database_access_functions
import helper_functions
import os

# CREATING INFLUENCER PROFILE ##########################
@post("/api/create-profile")
def _():
    
    # VARIABLES ##########################

    
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

        
  
    # VALIDATION ##########################

    if profile_image_delete is not None:
        filename,file_extension = os.path.splitext(profile_image_delete.filename)


        image_name =f"{image_id}{file_extension}"
        profile_image_delete.save(f"images/profile_images/{image_name}")
        
    
    
    # DATABASE CONNECTION ##########################

    db_config = helper_functions._db_config()
    
    selected_user_db = helper_functions._validation_function()
    
    if selected_user_db is not None:
        influencer_data = {
            "influencer_ID": influencer_ID,
            "user_id": selected_user_db[0],
            "influencer_username": influencer_username,
            "influencer_bio_description": influencer_bio_description,
            "influencer_location": influencer_location,
            "influencer_website": influencer_website,
            "influencer_instagram": influencer_instagram,
            "influencer_youtube": influencer_youtube,
            "influencer_tiktok": influencer_tiktok,
            "influencer_tags": influencer_tags,
            "influencer_category": influencer_category,
            "image_name": image_name,
            "profile_created_at": profile_created_at,
        }
        
        database_access_functions._create_influencer_profile(influencer_data, db_config)
        response.status = 200
    else:
        response.status = 400
        return  "Profile couldn't be created"
    
    


    
