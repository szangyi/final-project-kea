from bottle import get, response

@get("/api/logout")
def _():
    try:
        response.delete_cookie('token')
        response.status = 200
    except Exception as ex:
        print(ex)
        response.status = 500
    
