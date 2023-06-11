from bottle import response

# import pylibmagic

import magic
import os
import re


SECRET_KEY = "XM]-ktw8[f`~rRw4J"
COOKIE_SECRET = "7RDGNwEvWQ"

REGEX_EMAIL = '^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'
REGEX_URL = '(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?'
REGEX_SOME_ACCOUNT = '^[a-zA-Z0-9_\.]+$'

# VALIDATION ##########################

def _send(status = 400, error_message = "Something went wrong!"):
  response.status = status
  return {"Error message(s)":error_message}


# EMAIL
def _is_item_email(text=None):
  error = f"A valid e-mail format is: 'example@email.com'. No spaces"
  if not text : return None, error
  if not re.match(REGEX_EMAIL, text) : return None, error
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
  min, max = 6, 100
  error = f"Password must be {min} to {max} characters, must contain at least one uppercase-, one lowercase character, and one number."
  if not text: return None, error
  if not re.search(r'\d', text) : return None, error          # must contain at least one number
  if not re.search(r'[A-Z]', text) : return None, error       # must contain at least uppercase character
  if not re.search(r'[a-z]', text): return None, error        # must contain at least lowercase character
  # regex_password = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/'
  # if not re.match(regex_password, text) : return None, error
  if len(text) < min or len(text) > max : return None, error 
  return text, None

# BIO
def _is_longtext(text=None):
  min, max = 10, 200
  error = f"Bio must be {min} to {max} characters."
  if not text: return None, error
  text = text.strip()
  if len(text) < min or len(text) > max : return None, error
  return text, None

# URL
def _is_item_url(text=None):
  error = f"A valid url is: 'www.testsite.com'."
  if not text : return None, error
  if not re.match(REGEX_URL, text) : return None, error
  return text, None

# SOME
def _is_item_account(text=None):
  min, max = 3, 16
  # error = f"Account name cannot have any space and special characters, except '.' and '_'. "
  # if not re.match(REGEX_SOME_ACCOUNT, text) : return None, error
  error = f"Account name must be {min} to {max} characters. No spaces"
  if not text: return None, error
  text = re.sub("[\n\t]*", "", text)
  text = re.sub(" +", " ", text)
  text = text.strip()
  if len(text) < min or len(text) > max : return None, error 
  return text, None

# IMAGE
def _is_item_image(file):
  error = f"Invalid file type. Valid types: .png, .jpg, .jpeg"
  valid_mime_types = ['image/png', 'image/jpeg']
  file_mime_type = magic.from_buffer(file.file.read(1024), mime=True)
  file.file.seek(0)  # Reset the file pointer to the beginning
  if file_mime_type not in valid_mime_types:
    return None, error
  valid_file_extensions = ['.png', '.jpg', '.jpeg']
  ext = os.path.splitext(file.filename)[1]
  if ext.lower() not in valid_file_extensions:
    return None, error
  return file, None
    