# coding='utf8'
from . import Config


class DevelopementConfig(Config):
    '''开发者模式下的配置'''
    # 查询时会显示原始SQL语句
    SQLALCHEMY_ECHO = True
