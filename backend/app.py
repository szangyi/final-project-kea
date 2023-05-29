from bottle import Bottle, run, default_app, static_file, get, request

############# PY CLASSES ################
import g
import database_connection
import database_helper_functions
import helper_functions

import login
import signup

import influencer_get_profiles
import influencer_create_profile
import influencer_get_one_profile



import get_image
import delete_profile
import get_all_profiles
import add_to_favorites
import get_functions
import account_info 


#############  IMAGES  #################

@get("/images/<filepath:re:.*\.(jpg|png|gif|ico|svg)>")
def img(filepath):
    return static_file(filepath, root="./images")

############### RUN #####################
try:
  import production
  application = default_app()
except Exception as ex:
  print(ex)
  run(host="127.0.0.1", port=7878, debug=True, reloader=True, server="paste")