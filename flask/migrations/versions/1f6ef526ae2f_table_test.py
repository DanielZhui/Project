"""table test

Revision ID: 1f6ef526ae2f
Revises: 
Create Date: 2019-05-16 22:24:28.952906

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1f6ef526ae2f'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('grade',
    sa.Column('id', sa.Integer(), nullable=False, comment='班级ID'),
    sa.Column('name', sa.String(length=20), nullable=True, comment='班级'),
    sa.Column('create_time', sa.DateTime(), nullable=True, comment='创建时间'),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('student',
    sa.Column('id', sa.Integer(), nullable=False, comment='学生ID'),
    sa.Column('name', sa.String(length=16), nullable=True, comment='姓名'),
    sa.Column('sex', sa.Integer(), nullable=True, comment='性别'),
    sa.Column('grade_id', sa.Integer(), nullable=True, comment='班级ID'),
    sa.ForeignKeyConstraint(['grade_id'], ['grade.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('student')
    op.drop_table('grade')
    # ### end Alembic commands ###
