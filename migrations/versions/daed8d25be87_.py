"""empty message

Revision ID: daed8d25be87
Revises: 686cc74b6afe
Create Date: 2022-06-04 18:51:31.988784

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'daed8d25be87'
down_revision = '686cc74b6afe'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('note',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('application_id', sa.Integer(), nullable=False),
    sa.Column('note_text', sa.Text(), nullable=False),
    sa.ForeignKeyConstraint(['application_id'], ['application.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('notes')
    op.alter_column('application', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('interaction', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('interaction', 'application_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    op.alter_column('links', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('links', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('interaction', 'application_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('interaction', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.alter_column('application', 'user_id',
               existing_type=sa.INTEGER(),
               nullable=True)
    op.create_table('notes',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('application_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('note', sa.TEXT(), autoincrement=False, nullable=False),
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['application_id'], ['application.id'], name='notes_application_id_fkey'),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], name='notes_user_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='notes_pkey')
    )
    op.drop_table('note')
    # ### end Alembic commands ###