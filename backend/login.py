from bottle import request, redirect, post, response
import g 
import uuid
import mysql.connector
import bcrypt
import database_connection


@post("/login")
def _login():
    
    response.set_header("Cache-Control", "no-cache, no-store, must-revalidate")

    user_email = request.forms.get("user_email")
    user_session_id = str(uuid.uuid4())
    user_password = request.forms.get("user_password").encode("utf-8")
    salt = bcrypt.gensalt()
    password_hashed = bcrypt.checkpw(user_password, salt)

    response.set_cookie("user_email", user_email, secret=g.COOKIE_SECRET)
    response.set_cookie("session", user_session_id)

    try:
        import production
        db_config = database_connection.PRODUCTION_CONN

    except Exception as ex:
        print(ex)
        db_config = database_connection.DEVELOPMENT_CONN

    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_login = """SELECT * FROM users WHERE user_email =%s AND user_password=%s """
        var = (user_email, password_hashed)
        cursor.execute(sql_login, var)
        users = cursor.fetchone()

        sql_session= """ INSERT INTO sessions (session_id, session_user_email) VALUES (%s,%s)  """
        val_session = (user_session_id, user_email,)
        cursor.execute(sql_session, val_session)

        db.commit()
        response.status = 200

    except Exception as ex:
        response.status= 500
        print(ex)

    finally:
        db.close()


    