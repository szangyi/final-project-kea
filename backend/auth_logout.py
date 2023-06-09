from bottle import get, response
import g

@get("/api/logout")
def _():
    try:
        response.delete_cookie('token',secret=g.COOKIE_SECRET, path="/", httponly=True )
        response.status = 200
    except Exception as ex:
        print(ex)
        response.status = 500
    
