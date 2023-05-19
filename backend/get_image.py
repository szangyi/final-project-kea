from bottle import get, static_file

@get("/profile_images/<filename>")
def _(filename):
    return static_file(filename, root='images/profile_images')
