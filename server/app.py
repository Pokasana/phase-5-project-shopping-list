#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Shop, Item

# Views go here!
class Users(Resource):
    def get(self):
        response_dict_list = [user.to_dict() for user in User.query.all()]

        response = make_response(
            response_dict_list,
            200
        )

        return response
    
    def post(self):

        new_user =  User(
            name = request.get_json()
        )

        db.session.add(new_user)
        db.session.commit()

        response = make_response(
            new_user.to_dict(),
            201
        )

        return response
    
class UserById(Resource):
    def get(self, id):
        response_dict = User.query.filter_by(id=id).first()

        response = make_response(
            response_dict,
            200
        )

        return response
    
    def delete(self, id):
        user  = User.query.filter_by(id=id).first()
        db.session.delete(user)
        db.session.commit()

        return {"delete_successful": True, "message": "User deleted."}

class Shops(Resource):
    def get(self):

        response_dict = [shop.to_dict() for shop in Shop.query.all()]

        response = make_response(
            response_dict,
            200
        )

        return response
    
    def post(self):

        new_shop =  Shop(
            name = request.get_json()
        )

        db.session.add(new_shop)
        db.session.commit()

        response  = make_response(
            new_shop.to_dict(),
            201
        )

        return response

class ShopById(Resource):
    def get(self, id):
        shop = Shop.query.filter_by(id=id).first()

        response = make_response(
            shop.to_dict(),
            200
        )

        return response
    
    def delete(self, id):
        shop  = Shop.query.filter_by(id=id).first()
        db.session.delete(shop)
        db.session.commit()

        return {"delete_successful": True, "message": "Shop deleted."}
    
class Items(Resource):
    def get(self):
        response_dict = [item.to_dict() for item in Item.query.all()]

        response = make_response(
            response_dict,
            200
        )

        return response
    
    def post(self):
        print("Received post request")
        print(request.get_json())

        request_json = request.get_json()
        

        new_item =  Item(
            name = request_json["name"],
            favorite = request_json["favorite"],
            user_id = User.query.filter(User.name == request_json["user_name"]).first().id,
            shop_id = Shop.query.filter(Shop.name == request_json["shop_name"]).first().id
        )

        db.session.add(new_item)
        db.session.commit()

        response  = make_response(
            new_item.to_dict(),
            201
        )

        return response
    
class ItemById(Resource):
    def get(self, id):
        item = Item.query.filter_by(id=id).first()

        response = make_response(
            item.to_dict(),
            200
        )

        return response
    
    def patch(self, id):
        item = Item.query.filter_by(id=id).first()

        request_json = request.get_json()

        for attr in request_json:
            setattr(item, attr, request_json[attr])

        print(item)

        return {item.to_dict(), 200}
    
    def delete(self, id):
        item = Item.query.filter_by(id=id).first()

        db.session.delete(item)
        db.session.commit()

        return {"delete_successful": True, "message": "Item deleted."}

api.add_resource(Users, '/users')
api.add_resource(UserById, '/users/<int:id>')
api.add_resource(Shops, '/shops')
api.add_resource(ShopById, '/shops/<int:id>')
api.add_resource(Items, '/items')
api.add_resource(ItemById, '/items/<int:id>')

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

