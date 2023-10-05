from sqlalchemy import create_engine, MetaData, Table, Column, Integer, String

engine = create_engine('postgresql://postgres:4739@localhost:5432/SpaceTraders', echo=False)
metadata = MetaData()
users = Table(
    'users',
    metadata,
    Column('id', Integer, primary_key=True),
    Column('username', String(50), nullable=False),
    Column('email', String(100), unique=True, nullable=False),
    Column('access_token', String(100), unique=True, nullable=False),

)
metadata.create_all(engine)