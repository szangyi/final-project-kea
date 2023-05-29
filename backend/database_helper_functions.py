from bottle import response
import mysql.connector

def _get_user(user_email, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_get_user = """SELECT * FROM users WHERE user_email = %s"""
        var_user = (user_email,)
        cursor.execute(sql_get_user, var_user)
        user = cursor.fetchone()
        db.commit()
        response.status
        return user
    except Exception as ex:
        print(ex)
        response.status = 500
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
        print(ex)

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
        print(ex)

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
        print(ex)

    finally:
        db.close()