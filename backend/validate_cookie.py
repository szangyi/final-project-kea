from bottle import get, response, request
import helper_functions
import json

# VALIDATING THE COOKIE #
@get("/api/validate-cookie")
def _validate_cookie():

    try:

        value = request.query.get("value")
        print(value)
        validate_cookie_private = {"message": "page should be protected"}
        validate_cookie_public = {"message": "page is public"}

        
        selected_user_db = helper_functions._validation_function()

        if selected_user_db is not None:
            response.status = 200
            return json.dumps(validate_cookie_private)
        else:
            if value == "public":
                return json.dumps(validate_cookie_public)
            else:
                return json.dumps(validate_cookie_public)




    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)


