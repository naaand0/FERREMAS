import os

class Config:
    SECRET_KEY = os.urandom(32)
    MYSQL_USER = 'root'
    MYSQL_PASSWORD = ''
    MYSQL_DB = 'ferramas'
    MYSQL_HOST = 'localhost'

