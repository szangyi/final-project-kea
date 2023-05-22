from bottle import response

# validator library
from validator_collection import validators, checkers, errors

# plain py validatyion
import re


SECRET_KEY = "XM]-ktw8[f`~rRw4J"



# VALIDATION ##########################

def _send(status = 400, error_message = "unknown error"):
  response.status = status
  return {"Error message(s)":error_message}


# EMAIL
def _is_item_email(text=None):
  error = f"A valid e-mail format is: 'example@email.com'. No spaces"
  if not text : return None, error
  regex_email = '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
  if not re.match(regex_email, text) : return None, error
  return text, None

# NAME
def _is_first_name(text=None):
  min, max = 2, 20
  error = f"First name must be {min} to {max} characters. No spaces"
  if not text: return None, error
  text = re.sub("[\n\t]*", "", text)                         # removes all newline and tab characters
  text = re.sub(" +", " ", text)                             # replaces multiple consecutive spaces with a single space
  text = text.strip()                                        # removes any white space from the beginning and end of the string
  if len(text) < min or len(text) > max : return None, error
  text = text.capitalize()
  return text, None

def _is_last_name(text=None):
  min, max = 2, 20
  error = f"Last name must be {min} to {max} characters. No spaces"
  if not text: return None, error
  text = re.sub("[\n\t]*", "", text)
  text = re.sub(" +", " ", text)
  text = text.strip()
  if len(text) < min or len(text) > max : return None, error
  text = text.capitalize()
  return text, None

def _is_username(text=None):
  min, max = 3, 16
  error = f"Username must be {min} to {max} characters. No spaces"
  if not text: return None, error
  text = re.sub("[\n\t]*", "", text)
  text = re.sub(" +", " ", text)
  text = text.strip()
  if len(text) < min or len(text) > max : return None, error
  return text, None

# PASSWORD
def _is_password(text=None):
  min, max = 6, 20
  error = f"Password must be {min} to {max} characters, must contain at least one uppercase-, one lowercase character, and one number."
  if not text: return None, error
  if not re.search(r'\d', text) : return None, error          # must contain at least one number
  if not re.search(r'[A-Z]', text) : return None, error       # must contain at least uppercase character
  if not re.search(r'[a-z]', text): return None, error        # must contain at least lowercase character
  if len(text) < min or len(text) > max : return None, error 
  return text, None

# BIO
def _is_longtext(text=None):
  min, max = 10, 100
  error = f"Bio must be {min} to {max} characters."
  if not text: return None, error
  text = text.strip()
  if len(text) < min or len(text) > max : return None, error
  return text, None