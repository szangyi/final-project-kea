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
        return str(ex)
    finally:
        db.close()

def _user_exist_email(user_email, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_user_exist = """ SELECT * FROM users WHERE user_email = %s"""
        var = (user_email,)
        cursor.execute(sql_user_exist, var)
        user_exist = cursor.fetchone()
        db.commit()
        response.status = 200
        return user_exist
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)
    finally:
        db.close()


def _profile_exist(influencer_username, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_profile_exist = """ SELECT * FROM influencers_profile WHERE influencer_username = %s """
        var = (influencer_username, )
        cursor.execute(sql_profile_exist, var)
        profile_exist = cursor.fetchone()
        db.commit()
        response.status = 200
        return profile_exist
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
        sql_signup = """INSERT INTO users (user_ID, username, user_first_name, user_last_name, user_email, user_password, user_image_ID, user_interest_tags, is_influencer, user_created_at ) VALUES ( %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        var = (
            user_data["user_ID"],
            user_data["username"],
            user_data["user_first_name"],
            user_data["user_last_name"],
            user_data["user_email"],
            user_data["user_password"],
            user_data["user_image_ID"],
            user_data["user_interest_tags"],
            user_data["is_influencer"],
            user_data["user_created_at"],
        )
        cursor.execute(sql_signup, var)
        db.commit()
        response.status = 200
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)
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
        return str(ex)
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
        return None
    finally:
        db.close()

def _create_influencer_profile(influencer_data, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_create_profile = """INSERT INTO influencers_profile (influencer_ID, user_ID, influencer_username, influencer_bio_description, influencer_location, influencer_website, influencer_instagram, influencer_youtube, influencer_tiktok, influencer_tags, influencer_category, profile_image, profile_created_at) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"""
        var = (
            influencer_data["influencer_ID"],
            influencer_data["user_ID"],
            influencer_data["influencer_username"],
            influencer_data["influencer_bio_description"],
            influencer_data["influencer_location"],
            influencer_data["influencer_website"],
            influencer_data["influencer_instagram"],
            influencer_data["influencer_youtube"],
            influencer_data["influencer_tiktok"],
            influencer_data["influencer_tags"],
            influencer_data["influencer_category"],
            influencer_data["profile_image"],
            influencer_data["profile_created_at"],
        )
        cursor.execute(sql_create_profile, var)
        db.commit()
        response.status = 200
    except Exception as ex:
        print(ex)
        response.status = 500
        return str(ex)
        
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
        return str(ex)

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
        return str(ex)

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
        return str(ex)

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
        return str(ex)

    finally:
        db.close()

def _get_all_profiles(db_config, user_ID):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        # sql_check_influencer = "SELECT * FROM influencers_profile "
        sql_check_influencer = """
            SELECT influencers_profile.*, 
                CASE WHEN favorites.user_ID IS NOT NULL THEN 1 ELSE 0 END AS is_favorite
            FROM influencers_profile
            LEFT JOIN favorites
                ON influencers_profile.influencer_ID = favorites.influencer_ID
                   AND favorites.user_ID = %s
        """
        var = (user_ID,)
        cursor.execute(sql_check_influencer, var)
        profiles = cursor.fetchall()
        db.commit()
        
        response.status = 200
        return profiles
    
    except Exception as ex:
        response.status= 500
        return str(ex)

    finally:
        db.close()

def _get_random_profiles(user_ID, db_config, num_profiles):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_check_influencer = f"SELECT * FROM influencers_profile ORDER BY RAND() LIMIT {num_profiles}"
        cursor.execute(sql_check_influencer)
        random_profiles = cursor.fetchall()
        db.commit()
        
        response.status = 200
        return random_profiles
    
    except Exception as ex:
        response.status= 500
        return str(ex)

    finally:
        db.close()

def _check_favorite_relationship(user_ID, influencer_ID, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_check_relationship = """ SELECT * FROM favorites WHERE user_ID = %s AND influencer_ID = %s"""
        var = (user_ID, influencer_ID)
        cursor.execute(sql_check_relationship, var)
        relationship_exist = cursor.fetchone()
        db.commit()
        
        response.status = 200
        return relationship_exist
    
    except Exception as ex:
        response.status= 500
        return str(ex)

    finally:
        db.close()

def _add_to_favorites(user_ID, influencer_ID, db_config):
    try:
        print("###################### add to fav")
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_add_relationship = """INSERT INTO favorites (influencer_ID, user_ID ) VALUES (%s,%s)"""
        var = (influencer_ID, user_ID)
        cursor.execute(sql_add_relationship, var)
        db.commit()
        
        response.status = 200
    
    except Exception as ex:
        response.status= 500
        return str(ex)

    finally:
        db.close()

def _remove_from_favorites(user_ID, influencer_ID, db_config):
    try:
        print("###################### unfav")
        print("userid:")
        print(user_ID)
        print("influencerid:")
        print(influencer_ID)
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql_remove_relationship = """DELETE FROM favorites WHERE user_ID = %s AND influencer_ID = %s"""
        var = (user_ID, influencer_ID)
        cursor.execute(sql_remove_relationship, var)
        db.commit()
        
        response.status = 200
    
    except Exception as ex:
        response.status= 500
        return str(ex)

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
        var = (user_id, )
        cursor.execute(sql, var)
        favorite_influencers = cursor.fetchall()
        db.commit()
        
        response.status = 200
        return favorite_influencers
    except Exception as ex:
        response.status= 500
        return str(ex)

    finally:
        db.close()

def _update_user_basic_info(user_id,user_basic_data, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql = """ UPDATE users
                    SET username =%s,
                            user_first_name =%s,
                            user_last_name =%s,
                            user_image_ID = %s
                            
                    WHERE user_ID=%s
              """
        var = (
            user_basic_data["username"],
            user_basic_data["user_first_name"],
            user_basic_data["user_last_name"],
            user_basic_data["image_name"],
            user_id,
            
        )
        cursor.execute(sql, var)
        db.commit()
        
        response.status = 200
    except Exception as ex:
        print(ex)
        response.status= 500
        return str(ex)

    finally:
        db.close()



def _update_user_security_info(user_security_data, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql = """ UPDATE users
                    SET user_email =%s,
                            user_password =%s
                    WHERE user_ID=%s
              """
        var = (
            user_security_data["user_email"],
            user_security_data["user_password_new"],
            user_security_data["user_id"],
        )
        
        print(var)
        cursor.execute(sql, var)
        db.commit()
        
        response.status = 200
    except Exception as ex:
        print(ex)
        response.status= 500
        return str(ex)

    finally:
        db.close()
        
def _update_user_is_influencer(user_id,is_influencer, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        cursor = db.cursor()
        sql = """ UPDATE users
                    SET is_influencer =%s
                    WHERE user_ID=%s
              """
        var = (
            is_influencer,
            user_id
        )
        
        print(var)
        cursor.execute(sql, var)
        db.commit()
        
        response.status = 200
    except Exception as ex:
        print(ex)
        response.status= 500
        return str(ex)

    finally:
        db.close()

def _hashtags_manager(array_hashtags, hashtag_list, db_config):
    try:
        db = mysql.connector.connect(**db_config)
        db.start_transaction()
        cursor = db.cursor()
        
        for hashtag in hashtag_list:
            
            sql_check = "SELECT tag_ID FROM tags WHERE tag_name = %s"
            val_check = (hashtag,)
            cursor.execute(sql_check, val_check)
            result_check = cursor.fetchone()
            
            if not result_check:
                sql_insert = "INSERT INTO tags (tag_name) VALUES (%s)"
                val_insert = (hashtag,)
                cursor.execute(sql_insert, val_insert)
                db.commit()
                
                get_last_inserted_hashtag = cursor.lastrowid
                array_hashtags.append(get_last_inserted_hashtag)
            else:
                array_hashtags.append(result_check[0])
        
        return array_hashtags
        
    except Exception as ex:
        print(ex)
        response.status= 500
        return str(ex)

    finally:
        db.close()    