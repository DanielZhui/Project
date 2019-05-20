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


# 路由实现动态传参
# 需求：使用一个视图函数来显示不同用户的订单信息
@index_blu.route("/order/<int:order_id>")  # <>定义路由参数， <>内需要起个名字
# 需要在函数()内填入参数名，name后面的代码就能够使用
def get_order_id(order_id):
    return "order_id is %s" %order_id
