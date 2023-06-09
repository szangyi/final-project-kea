from bottle import response, request
import database_connection
import json
import jwt
import g
from datetime import datetime

def _cookie_validator():
    cookie = request.get_cookie("token", secret=g.COOKIE_SECRET)

    if cookie:
        response.status = 200
        return cookie
    else:
        response.status = 400
        return None

def _db_config():
    try:
        import production
        db_config = database_connection.PRODUCTION_CONN

    except Exception as ex:
        print(ex)
        db_config = database_connection.DEVELOPMENT_CONN
    
    return db_config

        
def _generate_token(email):
    try:
        payload = {'email': email}
        token_auth = jwt.encode(payload, g.SECRET_KEY, algorithm='HS256')
        token_json = {
            "jwt": token_auth
        }
        return token_json

    except Exception as ex:
        print(ex)
        return None

def _token_validator(token_request):
    try:
        token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
        user_email = token_data["email"]
        
        response.status = 200
        return user_email
    except jwt.ExpiredSignatureError:
        response.status = 401
        response.body = "Token is expired"
        return None
    except jwt.InvalidTokenError:
        response.status = 400
        response.body = "Invalid token"
        return None

def _datetime_handler(obj):
    if isinstance(obj, datetime):
        return obj.strftime('%Y-%m-%d %H:%M:%S')
    raise TypeError(f'Object of type {type(obj)} is not JSON serializable')
