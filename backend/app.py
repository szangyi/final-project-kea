from bottle import run, default_app, static_file, get

############# PY CLASSES ################
import g
import database_connection

import get_functions
import login
import signup
import account_info
import get_influencer
import create_profile

############### RUN #####################
try:
  import production
  application = default_app()
except Exception as ex:
  print(ex)
  run(host="127.0.0.1", port=7878, debug=True, reloader=True, server="paste")