from bottle import post, request, response
import jwt
import g
import uuid
import time
import json
import database_access_functions
import helper_functions
import os
import html

# CREATING INFLUENCER PROFILE #
@post("/api/create-profile")
def _():
    try:
        # VARIABLES ##########################
        cookie_request = helper_functions._cookie_validator()
        user_email_validated = helper_functions._token_validator(cookie_request)
        influencer_ID = str(uuid.uuid4())
        influencer_username = html.escape(request.forms.get("username"))
        influencer_bio_description = html.escape(request.forms.get("bio"))
        influencer_location = request.forms.get("location") # no validation
        influencer_website = html.escape(request.forms.get("website"))
        influencer_instagram = html.escape(request.forms.get("instagram"))
        influencer_youtube = html.escape(request.forms.get("youTube"))
        influencer_tiktok = html.escape(request.forms.get("tikTok"))
        influencer_tags_list = request.forms.get("hashtag") # no validation
        influencer_tags  = json.dumps(influencer_tags_list) # # no validation
        influencer_category = request.forms.get("category") # no validation
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

        if (influencer_instagram):
            influencer_instagram, error_ig = g._is_item_account(influencer_instagram)
            if error_ig:
                validation_errors.append(error_ig)

        if (influencer_youtube):
            influencer_youtube, error_yt = g._is_item_account(influencer_youtube)
            if error_yt:
                validation_errors.append(error_yt)

        if (influencer_tiktok): 
            influencer_tiktok, error_tt = g._is_item_account(influencer_tiktok)
            if error_tt:
                validation_errors.append(error_tt)
        
        profile_image_delete, error_img = g._is_item_image(profile_image_delete)
        if error_img:
            validation_errors.append(error_img)
        else:
            filename,file_extension = os.path.splitext(profile_image_delete.filename)
            image_name =f"{image_id}{file_extension}"
            profile_image_delete.save(f"images/profile_images/{image_name}")

        if validation_errors:
            return g._send(400, validation_errors)
    
    
        # DATABASE CONNECTION ##########################
        db_config = helper_functions._db_config()
        selected_user_db = database_access_functions._get_user(user_email_validated, db_config)
        
        if selected_user_db is not None:

            profile_exist_db = database_access_functions._profile_exist(influencer_username, db_config)
            if not profile_exist_db:
                user_id = selected_user_db[0]
                profiles = database_access_functions._get_all_influencer_profiles(user_id, db_config)
                if profiles == []:
                    is_influencer = True
                    database_access_functions._update_user_is_influencer(user_id, is_influencer, db_config)
                else:
                    pass
                                
                array_hashtags = []
                influencer_hashtag_divided = influencer_tags_list.split(",")
                hashtag_list = database_access_functions._hashtags_manager(array_hashtags, influencer_hashtag_divided, db_config)
                hashtag_list_json = json.dumps(hashtag_list)

                influencer_data = {
                    "influencer_ID": influencer_ID,
                    "user_ID": selected_user_db[0],
                    "influencer_username": influencer_username,
                    "influencer_bio_description": influencer_bio_description,
                    "influencer_location": influencer_location,
                    "influencer_website": influencer_website,
                    "influencer_instagram": influencer_instagram,
                    "influencer_youtube": influencer_youtube,
                    "influencer_tiktok": influencer_tiktok,
                    "influencer_tags": hashtag_list_json,
                    "influencer_category": influencer_category,
                    "profile_image": image_name,
                    "profile_created_at": profile_created_at,
                }
                
                database_access_functions._create_influencer_profile(influencer_data, db_config)
                response.status = 200
            else:
                response.status = 409 # Conflict
        else:
            response.status = 400
            return  "Profile couldn't be created"
    except Exception as ex:
        print(ex)
        response.status = 500