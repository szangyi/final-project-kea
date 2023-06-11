from bottle import get, static_file

# GETTING ONE IMAGE #
@get("/profile_images/<filename>")
def _(filename):
    return static_file(filename, root='images/profile_images')
