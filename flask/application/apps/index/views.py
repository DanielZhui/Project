from . import index_blu


@index_blu.route("/")
def index():
    return "welcome to index"