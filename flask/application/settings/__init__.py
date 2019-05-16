# encoding="utf8"
# 配置文件

from redis import StrictRedis


class Config(object):
    # 项目配置核心类
    DEBUG = True
    # todo配置日志
    LOG_LEVEL = "DEBUG"
    # mysql数据库的配置信息
    SQLALCHEMY_DATABASE_URI = "mysql://root:mysql@127.0.0.1:3306/students?charset=utf8"
    # 动态追踪修改设置（如果设置只会意识警告）
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    # 查询时会显示原始的SQL语句
    SQLALCHEMY_ECHO = False

    # 配置redis
    REDIS_HOST = '127.0.0.1' # 项目正式上线后需将这个地址替换成真正的ip地址(mysql也是)
    REDIS_PORT = 6379

    # 设置密匙，可以通过base.b64encode(os.urandom(48))来生成一个指定长度的随机字符串
    SECRET_KEY = "vibqpnbnsftM9XE63MhAmMC3Cdax8K0RCblvsoGbAXBQDwrK5SR9cmUD9NXYueDB"

    # flask_session的配置信息
    SESSION_TYPE = "redis" # 指定session保存到redis中
    SESSION_USE_SIGNER = True # 让cookie中的session_id被加密签名处理
    SESSION_REDIS = StrictRedis(host=REDIS_HOST,port=REDIS_PORT,db=1) # 使用redis的实例
    PERMANENT_SESSION_LIFETIME = 24 * 60 * 60 # 设置session的有效期(单位/秒)

