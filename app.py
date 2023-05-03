from bottle import run, default_app, static_file, get

############# PY CLASSES ################
import g
import database_connection

import get_functions
import login
import logout
import signup





############# CSS ##############
@get("/css/style.css")
def _():
    return static_file("style.css", root="./css")


  
############# JS ##############



############# IMAGES ##############

@get("/images/<filepath:re:.*\.(jpg|png|gif|ico|svg)>")
def img(filepath):
    return static_file(filepath, root="./images")
  
@get("/csv/<filepath:re:.*\.(csv)>")
def csv(filepath):
    return static_file(filepath, root="./csv")
 
############### RUN #####################
try:
  import production
  application = default_app()
except Exception as ex:
  print(ex)
  run(host="127.0.0.1", port=7878, debug=True, reloader=True, server="paste")