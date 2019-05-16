from . import Config


class ProductionConfig(Config):
    '''生成模式下的配置'''
    DEBUG = False
