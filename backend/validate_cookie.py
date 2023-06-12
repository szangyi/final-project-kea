from bottle import get, response, request
import helper_functions

# VALIDATING THE COOKIE #
@get("/api/validate-cookie")
def _validate_cookie():

    try:
        print("######## VALIDATE COOOOOKIE")

        onlyCheck = request.query.get("onlyCheck")
        print("######## onlycheck")
        print(onlyCheck)

        # VALIDATION ##########################

        if onlyCheck is not None:
            print("######public pages")
            print("# THIS SHOULD BE NONE")
            response.status = 200
            return None

        else:
            print("######private pages")
            selected_user_db = helper_functions._validation_function()
            
            if selected_user_db is not None:
                response.status = 200
            else:
                response.status = 400
                print("# invalid request")
                return None
                # return "Invalid request"  

    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)


