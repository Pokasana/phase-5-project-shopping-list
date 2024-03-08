#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import User

# Views go here!
class Users(Resource):
    def get(self):
        response_dict_list = [user.to_dict() for user in User.query.all()]

        response = make_response(
            response_dict_list,
            200
        )

        return response
    

api.add_resource(Users, '/users')

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

