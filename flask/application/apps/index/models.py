# coding=utf-8
from datetime import datetime
from application import db


class Grade(db.Model):
    id = db.Column(db.Integer, primary_key=True,comment="班级ID")
    name = db.Column(db.String(20), unique=True,comment="班级")
    create_time = db.Column(db.DateTime, default=datetime.now,comment="创建时间")
    students = db.relationship("Student", backref="grade")

    __tablename__ = 'grade'

    def __repr__(self):
        return self.name


class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True,comment="学生ID")
    name = db.Column(db.String(16), unique=True,comment="姓名")
    sex = db.Column(db.Integer,comment="性别")
    grade_id = db.Column(db.Integer, db.ForeignKey("grade.id"), nullable=True,comment="班级ID")

    __tablename__ = "student"

    def __repr__(self):
        return self.name


class User(db.Model):
    id = db.Column(db.Integer, autoincrement=True, primary_key=True, comment="用户ID")
    username = db.Column(db.String(16), unique=True, comment="用户名")
    password = db.Column(db.String(250), comment="用户密码") #密码实现加密处理
    create_time = db.Column(db.DateTime, default=datetime.now, comment="创建时间")
    role_id = db.Column(db.Integer, db.ForeignKey("role.id"),comment="角色ID")

    __tablename__ = "user"

    def __repr__(self):
        return self.username


# 角色和权限(多对多字段需要第三张表关联)
role_per = db.Table("role_per",
                    db.Column("role_id", db.Integer, db.ForeignKey("role.id"), primary_key=True),
                    db.Column("permission_id", db.Integer, db.ForeignKey("permission.id"), primary_key=True))


class Role(db.Model):
    id = db.Column(db.Integer, autoincrement=True, primary_key=True, comment="角色ID")
    name = db.Column(db.String(10), comment="角色名")
    users = db.relationship("User", backref="role")

    __tablename__ = "role"

    def __repr__(self):
        return self.name


class Permission(db.Model):
    id = db.Column(db.Integer, autoincrement=True, primary_key=True, comment="权限ID")
    name = db.Column(db.String(16), unique=True, comment="权限名")
    p_er = db.Column(db.String(16), unique=True)
    role = db.relationship('Role', secondary=role_per, backref=db.backref("permission",lazy=True))

    __tablename__ = "permission"

    def __repr__(self):
        return self.name
