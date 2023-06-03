from bottle import response
import mysql.connector

def _user_exist(user_email, username, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_user_exist = """ SELECT * FROM users WHERE user_email = %s OR username = %s"""
        var = (user_email, username)
        cursor.execute(sql_user_exist, var)
        user_exist = cursor.fetchone()
        db.commit()
        response.status = 200
        return user_exist
    except Exception as ex:
        print(ex)
        response.status = 500
        response.body = ex
    finally:
        db.close()

def _signup(user_data, db_config ):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_signup = """INSERT INTO users (user_ID, username, user_first_name, user_last_name, user_location, user_email, user_password, user_image_ID, user_interest_tags, is_influencer, user_created_at ) VALUES ( %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        val_create_profile = (
            user_data["user_ID"],
            user_data["username"],
            user_data["user_first_name"],
            user_data["user_last_name"],
            user_data["user_location"],
            user_data["user_email"],
            user_data["user_password"],
            user_data["user_image_ID"],
            user_data["user_interest_tags"],
            user_data["is_influencer"],
            user_data["user_created_at"],
        )
        cursor.execute(sql_signup, val_create_profile)
        db.commit()
        response.status = 200
    except Exception as ex:
        print(ex)
        response.status = 500
        response.body = ex
    finally:
        db.close()

def _login(user_email, password_hashed, db_config ):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_login = """SELECT * FROM users WHERE user_email =%s AND user_password=%s """
        var = (user_email, password_hashed)
        cursor.execute(sql_login, var)
        user = cursor.fetchone()
        db.commit()
        response.status = 200
        return user
    except Exception as ex:
        print(ex)
        response.status = 500
        response.body = ex
    finally:
        db.close()
        
def _get_user(user_email, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_get_user = """SELECT * FROM users WHERE user_email = %s"""
        var_user = (user_email,)
        cursor.execute(sql_get_user, var_user)
        user = cursor.fetchone()
        db.commit()
        response.status = 200
        return user
    except Exception as ex:
        print(ex)
        response.status = 500
        response.body = ex
        return None
    finally:
        db.close()

def _create_influencer_profile(influencer_data, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_create_profile = """INSERT INTO influencers_profile (influencer_ID, user_ID, influencer_username, influencer_bio_description, influencer_location, influencer_website, influencer_instagram, influencer_youtube, influencer_tiktok, influencer_tags, influencer_category, profile_image_delete, profile_created_at) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        val_create_profile = (
            influencer_data["influencer_ID"],
            influencer_data["user_id"],
            influencer_data["influencer_username"],
            influencer_data["influencer_bio_description"],
            influencer_data["influencer_location"],
            influencer_data["influencer_website"],
            influencer_data["influencer_instagram"],
            influencer_data["influencer_youtube"],
            influencer_data["influencer_tiktok"],
            influencer_data["influencer_tags"],
            influencer_data["influencer_category"],
            influencer_data["image_name"],
            influencer_data["profile_created_at"],
        )
        cursor.execute(sql_create_profile, val_create_profile)
        db.commit()
        response.status = 200
    except Exception as ex:
        print(ex)
        response.status = 500
        response.body = ex
        
    finally:
        db.close()

def _get_all_influencer_profiles(user_id, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_check_influencer = "SELECT * FROM influencers_profile WHERE user_ID = %s"
        var_check_influencer = (user_id,)
        cursor.execute(sql_check_influencer, var_check_influencer)
        profiles = cursor.fetchall()
        db.commit()
        
        response.status = 200
        return profiles

    except Exception as ex:
        response.status= 500
        response.body = ex

    finally:
        db.close()
        
def _get_one_influencer_profile(influencer_username, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_get_user = """SELECT * FROM influencers_profile WHERE influencer_username =%s"""
        var = (influencer_username,)
        cursor.execute(sql_get_user, var)
        profile = cursor.fetchone()
        db.commit()
        
        response.status = 200
        return profile
    
    except Exception as ex:
        response.status= 500
        response.body=ex

    finally:
        db.close()

def _get_other_influencer_profiles(user_ID,username, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_check_influencer = "SELECT * FROM influencers_profile WHERE user_ID = %s AND influencer_username <> %s"
        var_check_influencer = (user_ID,username,)
        cursor.execute(sql_check_influencer, var_check_influencer)
        other_profiles = cursor.fetchall()
        
        response.status = 200
        return other_profiles
    
    except Exception as ex:
        response.status= 500
        response.body = ex

    finally:
        db.close()

def _delete_influencer_profile(influencer_ID, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql = """ DELETE FROM influencers_profile WHERE influencer_ID=%s"""
        cursor.execute(sql, (influencer_ID,))
        
        response.status = 200
        db.commit()
    
    except Exception as ex:
        response.status= 500
        response.body = ex

    finally:
        db.close()

def _get_all_profiles(db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_check_influencer = "SELECT * FROM influencers_profile "
        cursor.execute(sql_check_influencer)
        profiles = cursor.fetchall()
        db.commit()
        
        response.status = 200
        return profiles
    
    except Exception as ex:
        response.status= 500
        response.body = ex

    finally:
        db.close()

def _get_random_profiles(db_config, num_profiles):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_check_influencer = f"SELECT * FROM influencers_profile ORDER BY RAND() LIMIT {num_profiles}"
        # sql_check_influencer = "SELECT * FROM influencers_profile ORDER BY RAND() LIMIT 4"
        cursor.execute(sql_check_influencer)
        random_profiles = cursor.fetchall()
        db.commit()
        
        response.status = 200
        return random_profiles
    
    except Exception as ex:
        response.status= 500
        response.body = ex

    finally:
        db.close()

def _add_to_favorites(influencer_ID, user_id, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_create_profile = """INSERT INTO favorites (influencer_ID, user_ID ) VALUES (%s,%s)"""
        val_create_profile = (influencer_ID, user_id, )
        cursor.execute(sql_create_profile, val_create_profile)
        db.commit()
        
        response.status = 200
    
    except Exception as ex:
        response.status= 500
        response.body = ex

    finally:
        db.close()

def _get_all_favorites(user_id, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql = """SELECT influencers_profile.*, 1 AS is_favorite
            FROM influencers_profile
            WHERE influencers_profile.influencer_ID IN (
                SELECT influencer_ID FROM favorites WHERE user_ID = %s
            )"""
        val = (user_id, )
        cursor.execute(sql, val)
        favorite_influencers = cursor.fetchall()
        db.commit()
        
        response.status = 200
        return favorite_influencers
    except Exception as ex:
        response.status= 500
        response.body = ex

    finally:
        db.close()