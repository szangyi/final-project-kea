from bottle import post, response, request
import json
import time
import uuid 
import html
import g
import os
import helper_functions
import database_access_functions

@post("/edit-influencer")
def _edit_influencer():
    try:
        cookie_request = helper_functions._cookie_validator()
        user_email_validated = helper_functions._token_validator(cookie_request)
        influencer_username = html.escape(request.forms.get("username"))
        influencer_bio_description = html.escape(request.forms.get("bio"))
        influencer_location = request.forms.get("location") 
        influencer_website = html.escape(request.forms.get("website"))
        influencer_instagram = html.escape(request.forms.get("instagram"))
        influencer_youtube = html.escape(request.forms.get("youTube"))
        influencer_tiktok = html.escape(request.forms.get("tikTok"))
        influencer_tags_list = request.forms.get("hashtag") 
        influencer_tags  = json.dumps(influencer_tags_list) 
        influencer_category = request.forms.get("category") 
        profile_image_delete = request.files.get("image")
        profile_created_at = str(int(time.time()))
        image_id = str(uuid.uuid4())
        
        
        # VALIDATION ##########################
        validation_errors = []

        influencer_username, error_un = g._is_username(influencer_username)
        if error_un:
            validation_errors.append(error_un)

        influencer_bio_description, error_bio = g._is_longtext(influencer_bio_description)
        if error_bio:
            validation_errors.append(error_bio)

        if (influencer_website):
            influencer_website, error_web = g._is_item_url(influencer_website)
            if error_web:
                validation_errors.append(error_web)
        
        profile_image_delete, error_img = g._is_item_image(profile_image_delete)
        if error_img:
            validation_errors.append(error_img)
        else:
            filename,file_extension = os.path.splitext(profile_image_delete.filename)
            image_name =f"{image_id}{file_extension}"
            profile_image_delete.save(f"images/profile_images/{image_name}")

        if validation_errors:
            return g._send(400, validation_errors)
        
        db_config = helper_functions._db_config()
        selected_user_db = database_access_functions._get_user(user_email_validated, db_config)
        
        if selected_user_db is not None:
            profile_exist_db = database_access_functions._profile_exist(influencer_username, db_config)
            if not profile_exist_db:
                influencer_data = {
                    "influencer_username": influencer_username,
                    "influencer_bio_description": influencer_bio_description,
                    "influencer_location": influencer_location,
                    "influencer_website": influencer_website,
                    "influencer_instagram": influencer_instagram,
                    "influencer_youtube": influencer_youtube,
                    "influencer_tiktok": influencer_tiktok,
                    "influencer_tags": influencer_tags,
                    "influencer_category": influencer_category,
                    "profile_image": image_name,
                    "profile_created_at": profile_created_at,
                }
                
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)