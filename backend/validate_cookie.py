from bottle import get, response
import helper_functions

# GETTING ONE INFLUENCER PROFILE ##########################
@get("/api/validate-cookie")
def _():
    
    # VARIABLES ##########################
    cookie_request = helper_functions._cookie_validator()
    
    if cookie_request is not None:
        response.status = 200
    else:
        response.status = 401
        return "Invalid request"        
    
