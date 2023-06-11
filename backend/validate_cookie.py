from bottle import get, response
import helper_functions

# VALIDATING THE COOKIE #
@get("/api/validate-cookie")
def _validate_cookie():
    try:
        # VALIDATION ##########################
        selected_user_db = helper_functions._validation_function()
        
        if selected_user_db is not None:
            response.status = 200
        else:
            response.status = 400
            return "Invalid request"        
        
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)


