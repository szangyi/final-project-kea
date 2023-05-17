from bottle import response

# validator library
from validator_collection import validators, checkers, errors

# plain py validatyion
import re


SECRET_KEY = "XM]-ktw8[f`~rRw4J"



# VALIDATION ##########################

def _send(status = 400, error_message = "unknown error"):
  response.status = status
  return {"info":error_message}


# EMAIL
def _is_item_email(text=None):
  error = f"A valid e-mail format is: 'example@email.com'. No spaces"
  if not text : return None, error
  regex_email = '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
  if not re.match(regex_email, text) : return None, error
  return text, None

# NAME
