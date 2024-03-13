from sqlalchemy import func
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)

    items =  db.relationship('Item', back_populates='user')

    def  __repr__(self):
        return f'User: {self.id} {self.name}'
    
class Shop(db.Model, SerializerMixin):
    __tablename__ = 'shops'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)

    items = db.relationship('Item', back_populates='shop')

    def __repr__(self):
        return f'Shop: {self.id} {self.name}'
    
    
class Item(db.Model, SerializerMixin):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name =db.Column(db.String, unique=True, nullable=False)
    favorite = db.Column(db.Boolean, default=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    shop_id = db.Column(db.Integer, db.ForeignKey('shops.id'))

    user = db.relationship('User', back_poppulates='items')
    shop = db.relationship('Shop', back_populates='items')

    def __repr__(self):
        return f'Item: {self.id} {self.name} {self.favorite}'