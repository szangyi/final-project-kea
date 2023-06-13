from bottle import post, request, response
import g
import uuid
import database_access_functions
import helper_functions
import os
import html

# UPDATING USER ACCOUNT INFO # 
@post("/api/update-basic-info")
def _update_basic_info():
    try:
        # VARIABLES ##########################
        user_first_name = html.escape(request.forms.get("firstName"))
        user_last_name = html.escape(request.forms.get("lastName"))
        username = html.escape(request.forms.get("username"))
        user_image = request.files.get("image")
        image_id = str(uuid.uuid4())
        

        # VALIDATION ##########################
        validation_errors = []

        username, error_un = g._is_username(username)
        if error_un:
            validation_errors.append(error_un)
        user_first_name, error_un = g._is_first_name(user_first_name)
        if error_un:
            validation_errors.append(error_un)
        user_last_name, error_un = g._is_last_name(user_last_name)
        if error_un:
            validation_errors.append(error_un)        
        user_image, error_img = g._is_item_image(user_image )
        if error_img:
            validation_errors.append(error_img)
        else:
            filename,file_extension = os.path.splitext(user_image.filename)
            image_name =f"{image_id}{file_extension}"
            user_image.save(f"images/profile_images/{image_name}")

        if validation_errors:
            return g._send(400, validation_errors)
        
        
        # DATABASE ##########################
        db_config = helper_functions._db_config()
        selected_user_db = helper_functions._validation_function()
        
        if selected_user_db is not None:
            if selected_user_db[1] != username:
                user_email = selected_user_db[4]
                check_user = database_access_functions._user_exist(user_email, username , db_config )
                if check_user is None:
                    _update_user_function(selected_user_db,user_first_name, user_last_name, username,image_name, db_config )
                else: 
                    response.status = 409
            else:
                _update_user_function(selected_user_db,user_first_name, user_last_name, username, image_name, db_config )

        else:
            response.status = 400
            return  "User info couldn't be updated"
       
    

    except Exception as ex:
        print(ex)
        return str(ex)
    
def _update_user_function(selected_user_db,user_first_name, user_last_name, username, image_name, db_config):
    user_id = selected_user_db[0]
    user_basic_data = {
        "user_first_name": user_first_name,
        "user_last_name": user_last_name,
        "username": username,
        "image_name": image_name
    }
    
    database_access_functions._update_user_basic_info(user_id, user_basic_data, db_config)
    response.status = 200