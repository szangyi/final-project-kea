from bottle import Bottle, run, default_app, static_file, get, route

############# PY CLASSES ################
import g
import database_connection
import database_access_functions
import helper_functions
import get_image

import auth_login
import auth_signup
import auth_logout
import validate_cookie
import check_cookie

import influencer_get_profiles
import influencer_create_profile
import influencer_get_one_profile
import influencer_delete_profile
import influencers_get_all_profiles
import influencers_get_random_profiles

import profile_add_to_favorites
import favorites_get_all

import user_account_info
import user_delete_account 
import user_update_basic_info
import user_update_security_info





#############  IMAGES  #################

# development
@get("/images/<filepath:re:.*\.(jpg|png|gif|ico|svg)>")
def img(filepath):
  return static_file(filepath, root="./images")
  
# production
@get("/images/<filepath:re:.*\.(jpg|png|gif|ico|svg)>")
def img(filepath):
   return static_file(filepath, root="./home/influencrszangyi/final-project-kea/backend/images/")

# production
@route('/<:re:.*>', method='GET')
def react_app():
   return static_file('index.html', root='/home/influencrszangyi/final-project-kea/frontend/build')

############### RUN #####################
try:
  import production
  application = default_app()
except Exception as ex:
  print(ex)
  run(host="127.0.0.1", port=7878, debug=True, reloader=True, server="paste")