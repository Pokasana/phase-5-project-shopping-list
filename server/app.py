#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User, Shop, Item, Comment

# Views go here!
class Users(Resource):
    def get(self):
        users_dict = [user.to_dict() for user in User.query.all()]

        response = make_response(
            users_dict,
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
        user_dict = User.query.filter_by(id=id).first().to_dict()

        response = make_response(
            user_dict,
            200
        )

        return response
    
    def delete(self, id):
        user  = User.query.filter_by(id=id).first()
        db.session.delete(user)
        db.session.commit()

        return {"delete_successful": True, "message": "User deleted.", "userId": id}

class Shops(Resource):
    def get(self):

        shops_dict = [shop.to_dict() for shop in Shop.query.all()]

        response = make_response(
            shops_dict,
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
        shop_dict = Shop.query.filter_by(id=id).first().to_dict()

        response = make_response(
            shop_dict,
            200
        )

        return response
    
    def delete(self, id):
        shop  = Shop.query.filter_by(id=id).first()
        db.session.delete(shop)
        db.session.commit()

        return {"delete_successful": True, "message": "Shop deleted.", "shopId": id}
    
class Items(Resource):
    def get(self):
        items_dict = [item.to_dict() for item in Item.query.all()]

        response = make_response(
            items_dict,
            200
        )

        return response
    
    def post(self):
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
        item_dict = Item.query.filter_by(id=id).first().to_dict()

        response = make_response(
            item_dict,
            200
        )

        return response
    
    def patch(self, id):

        item = Item.query.filter_by(id=id).first()

        request_json = request.get_json()

        item.name = request_json["name"]
        item.favorite = request_json["favorite"]
        item.user_id = User.query.filter(User.name == request_json["user_name"]).first().id
        item.shop_id = Shop.query.filter(Shop.name == request_json["shop_name"]).first().id
        
        db.session.add(item)
        db.session.commit()

        response = make_response(
            item.to_dict(),
            200
        )

        return response
    
    def delete(self, id):
        item = Item.query.filter_by(id=id).first()

        db.session.delete(item)
        db.session.commit()

        return {"delete_successful": True, "message": "Item deleted.", "itemId": id}
    
class Comments(Resource):
    def get(self):
        comments_dict = [comment.to_dict() for comment in Comment.query.all()]

        response = make_response(
            comments_dict,
            200
        )

        return response
    
    def post(self):
        request_json = request.get_json()

        new_comment =  Comment(
            content = request_json["name"],
            user_id = request_json["userId"],
            item_id = request_json["itemId"]
        )

        db.session.add(new_comment)
        db.session.commit()

        response  = make_response(
            new_comment.to_dict(),
            201
        )

        return response
    
class CommentById(Resource):
    def delete(self, id):
        comment = Comment.query.filter_by(id=id).first()

        db.session.delete(comment)
        db.session.commit()

        return {"delete_successful": True, "message": "Comment deleted.", "commentId": id}
    
class Login(Resource):
    def get(self):
        return {}

    def post(self):
        user = User.query.filter(
            User.id == request.get_json()['id']
        ).first()

        session['user_id'] = user.id
        
        response = make_response(
            user.to_dict(),
            201
        )

        return response
    
    def delete(self):
        session['user_id'] = None

        return {"logout_successful": True, "message": "User logged out"}
    
class CheckSession(Resource):
    def get(self):
        user = User.query.filter(User.id == session.get("user_id")).first()
        if user:
            return {user.to_dict()}, 200
        else:
            return {"message": '401: Not Authorized'}, 401

api.add_resource(Login, '/login')
api.add_resource(CheckSession, '/check_session')
api.add_resource(Users, '/users')
api.add_resource(UserById, '/users/<int:id>')
api.add_resource(Shops, '/shops')
api.add_resource(ShopById, '/shops/<int:id>')
api.add_resource(Items, '/items')
api.add_resource(ItemById, '/items/<int:id>')
api.add_resource(Comments, '/comments')

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

