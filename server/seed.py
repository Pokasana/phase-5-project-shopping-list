#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Item

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        User.query.delete()

        users = []

        for i in range(3):
            users.append(User(name = fake.first_name()))

        db.session.add_all(users)
        db.session.commit()

        print("Users seeded")

        Item.query.delete()

        items = []

        items.append(Item(product_name='Carrots', category = 'grocery', favorite = True))
        items.append(Item(product_name='Milk', category = 'grocery', favorite = True))
        items.append(Item(product_name='White wine', category = 'grocery', favorite = False))
        items.append(Item(product_name='Toilet Rolls', category = 'grocery', favorite = False))
        items.append(Item(product_name='', category = 'grocery', favorite = False))
