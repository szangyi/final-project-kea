from bottle import post, request, response
import jwt
import g
import uuid
import time
import json
import database_helper_functions
import helper_functions
import os

# CREATING INFLUENCER PROFILE ##########################
@post("/api/create-profile")
def _():
    
    # VARIABLES ##########################

    cookie_request = helper_functions._cookie_validator()
    
    influencer_ID = str(uuid.uuid4())
    influencer_username = request.forms.get("username")
    influencer_bio_description = request.forms.get("bio")
    influencer_location = request.forms.get("location") # no validation
    influencer_website = request.forms.get("website")
    influencer_instagram = request.forms.get("instagram")
    influencer_youtube = request.forms.get("youTube")
    influencer_tiktok = request.forms.get("tikTok")
    influencer_tags_list = request.forms.get("hashtag") # no validation
    influencer_tags  = json.dumps(influencer_tags_list) # # no validation
    influencer_category = request.forms.get("category") # no validation
    profile_image_delete = request.files.get("image")
    profile_created_at = str(int(time.time()))
    image_id = str(uuid.uuid4())


    print('######## INFLUENCER USERNAME:')
    print(influencer_username)
    print(influencer_username)

    # VALIDATION ##########################

    validation_errors = []

    influencer_username, error_un = g._is_username(influencer_username)
    if error_un:
        validation_errors.append(error_un)

    influencer_bio_description, error_bio = g._is_longtext(influencer_bio_description)
    if error_bio:
        validation_errors.append(error_bio)

    # influencer_website, error_web = g._is_item_url(influencer_website)
    # if error_web:
    #     validation_errors.append(error_web)

    # influencer_instagram, error_ig = g._is_item_account(influencer_instagram)
    # if error_ig:
    #     validation_errors.append(error_ig)

    # influencer_youtube, error_yt = g._is_item_account(influencer_youtube)
    # if error_yt:
    #     validation_errors.append(error_yt)
        
    # influencer_tiktok, error_tt = g._is_item_account(influencer_tiktok)
    # if error_tt:
    #     validation_errors.append(error_tt)
    
    # profile_image_delete, error_img = g._is_item_image(profile_image_delete )
    # if error_img:
    #     validation_errors.append(error_img)
    # else:
    #     filename,file_extension = os.path.splitext(profile_image_delete.filename)
    #     image_name =f"{image_id}{file_extension}"
    #     profile_image_delete.save(f"images/profile_images/{image_name}")

    if profile_image_delete is not None:
        filename,file_extension = os.path.splitext(profile_image_delete.filename)
        image_name =f"{image_id}{file_extension}"
        profile_image_delete.save(f"images/profile_images/{image_name}")
        
    

    if validation_errors:
        print("################## VALIDATION ERRORS")
        print(validation_errors)
        return g._send(400, validation_errors)
    


    user_email_validated = helper_functions._token_validator(cookie_request)
    
    # DATABASE CONNECTION ##########################

    db_config = helper_functions._db_config()

    selected_user_db = database_helper_functions._get_user(user_email_validated, db_config)
    
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
        
        database_helper_functions._create_influencer_profile(influencer_data, db_config)
        response.status = 200
    else:
        response.status = 400
        return  "Profile couldn't be created"
    
    


    
