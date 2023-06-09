from bottle import get, response
import helper_functions
import database_helper_functions
# GETTING ONE INFLUENCER PROFILE ##########################
@get("/api/validate-cookie")
def _():
    
    # VARIABLES ##########################
    cookie_request = helper_functions._cookie_validator()
    user_email_validated = helper_functions._token_validator(cookie_request)
    # DATABASE CONNECTION ##########################
    db_config = helper_functions._db_config()
    selected_user_db = database_helper_functions._get_user(user_email_validated, db_config)

    
    if selected_user_db is not None:
        response.status = 200
    else:
        response.status = 401
        return "Invalid request"        
    
