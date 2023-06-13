from bottle import get, response
import helper_functions

# VALIDATING THE COOKIE #
@get("/api/check-cookie")
def _check_cookie():
    try:
        # VALIDATION ##########################
        selected_user_db = helper_functions._validation_function()
        
        if selected_user_db is not None:
            response.status = 200
        else:
            response.status = 400
            return False     
        
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)


