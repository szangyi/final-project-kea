from bottle import request, get, response
import g
import database_connection
import mysql.connector

@get("/logout")
def _logout():
    response.set_header("Cache-Control", "no-cache, no-store, must-revalidate")
    user_session_id = request.get_cookie("session")

###################### CONNECTING TO THE DATABASE ########################
    try:
        import production
        db_config = database_connection.PRODUCTION_CONN

    except Exception as ex:
        print(ex)
        db_config = database_connection.DEVELOPMENT_CONN

    try:
        db = mysql.connector.connect(**db_config) 
        cursor = db.cursor(buffered=True)
        sql = """ DELETE FROM sessions WHERE session_id=%s"""
        cursor.execute(sql, (user_session_id,))
        db.commit()
        response.status = 200

    except Exception as ex:
        print(ex)
        response.status = 500

    finally:
        db.close()
