#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Shop

# Views go here!
class Login(Resource):
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

    #Create new resource for a single record and add this delete method into it
    # def delete(self):
    #     print('DELETE request received')

class ShopById(Resource):
    def get(self, id):
        shop = Shop.query.filter_by(id=id).first()

        response = make_response(
            shop.to_dict(),
            200
        )

        return response
    
    def delete(self, id):
        print('DELETE request received')
        shop  = Shop.query.filter_by(id=id).first()
        db.session.delete(shop)
        db.session.commit()

        return {"delete_successful": True, "message": "Shop deleted."}

api.add_resource(Login, '/login')
api.add_resource(Shops, '/shops')
api.add_resource(ShopById, '/shops/<int:id>')

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

