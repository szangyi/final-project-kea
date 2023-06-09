from bottle import get, response
import helper_functions

# VALIDATING THE COOKIE ##########################
@get("/api/validate-cookie")
def _():
    
    # VALIDATION ##########################
    selected_user_db = helper_functions._validation_function()
    
    if selected_user_db is not None:
        response.status = 200
    else:
        response.status = 401
        return "Invalid request"        
    

