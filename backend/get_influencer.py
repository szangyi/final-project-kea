from bottle import get, request, response
import json
import jwt
import database_connection
import mysql.connector
import g

@get("/get-influencer")
def _():
    token_request = request.headers.get('Authorization')
    token_data = jwt.decode(token_request, g.SECRET_KEY, algorithms=["HS256"])
    user_email = token_data["email"]
    
    
    try:
        import production
        db_config = database_connection.PRODUCTION_CONN

    except Exception as ex:
        print(ex)
        db_config = database_connection.DEVELOPMENT_CONN
    
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_get_user = """SELECT * FROM users WHERE user_email =%s"""
        var = (user_email,)
        cursor.execute(sql_get_user, var)
        user = cursor.fetchone()
        db.commit()
        
        user_id = user[0]
        sql_check_influencer = "SELECT * FROM influencers_profile WHERE user_ID = %s"
        var_check_influencer = (user_id,)
        cursor.execute(sql_check_influencer, var_check_influencer)
        profiles = cursor.fetchall()
        db.commit()
                

    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()

    
    print(profiles)
    if profiles == []:
        influencer_profile_data = {
            "result": "no profile"
        }
    else:
        influencer_profile_data = {
            "username": ""
        }
    
    influencer_profile_data_json = json.dumps(influencer_profile_data)
    return influencer_profile_data_json