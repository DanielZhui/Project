from . import index_blu
from flask import render_template, request


@index_blu.route("/")
def index():
    return "welcome to index"


@index_blu.route("/login/", methods=['GET', 'POST'])
def login():
    if request.method == "GET":
        return render_template("login.html")


@index_blu.route("/register/", methods=['GET', 'POST'])
def register():
    if request.method == 'GET':
        return render_template("register.html")


@index_blu.route("/home/", methods=['GET'])
def home():
    return render_template("home.html")


