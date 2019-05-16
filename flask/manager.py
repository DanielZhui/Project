from application import init_app,db
from flask_script import Manager
from flask_migrate import Migrate,MigrateCommand

# 提供两种模式：dev和prop
app = init_app("dev")

# 使用终端脚本工具启动管理flask
manager = Manager(app)
# 启用数据迁移工具
Migrate(app, db)
# 添加数据迁移的命令道终端脚本工具中
manager.add_command('db', MigrateCommand)

# 导入模型[进行数据迁移]
from application.apps.index.models import Student


@app.route('/index')
def index():
    return 'index'


if __name__ == '__main__':
    # app.run(host="127.0.0.1", port=8000)
    manager.run()
