#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Shop, Item, users_shops

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('Drop tables')
        db.session.query(users_shops).delete()
        db.commit()
        User.query.delete()
        Shop.query.delete()
        Item.query.delete()

        print("Start seeding...")

        users = []
        for i in range(3):
            users.append(User(name = fake.first_name()))

        db.session.add_all(users)
        db.session.commit()
        print("Users seeded")

        shops = []
        shops.append(Shop(name = 'Costco'))
        shops.append(Shop(name = 'Safeway'))
        shops.append(Shop(name = 'Whole Foods'))
        shops.append(Shop(name = 'The Home Depot'))

        db.session.add_all(shops)
        db.session.commit()
        print("Shops seeded")

        items = []

        items.append(Item(name='Soy milk', favorite=True, user=users[0], shop=shops[0]))
        items.append(Item(name='Milk', favorite=True, user=users[0], shop=shops[0]))
        items.append(Item(name='Bin bags', favorite=True, user=users[2], shop=shops[0]))
        items.append(Item(name='Toilet Rolls', favorite=True, user=users[1], shop=shops[0]))
        items.append(Item(name='Red wine', favorite=False, user=users[1], shop=shops[0]))

        items.append(Item(name='Carrots', favorite=True, user=users[0], shop=shops[1]))
        items.append(Item(name='Sprite', favorite=True, user=users[2], shop=shops[1]))
        items.append(Item(name='Avocados', favorite=True, user=users[1], shop=shops[1]))
        items.append(Item(name='Pop corns', favorite=False, user=users[1], shop=shops[1]))

        items.append(Item(name='Smoked salmon', favorite=False, user=users[2], shop=shops[2]))
        items.append(Item(name='Chocolate', favorite=False, user=users[0], shop=shops[2]))
        items.append(Item(name='Smoothie cubes', favorite=False, user=users[0], shop=shops[2]))
        items.append(Item(name='Frozen pizza', favorite=True, user=users[2], shop=shops[2]))

        items.append(Item(name='Deck brush', favorite=False, user=users[1], shop=shops[3]))
        items.append(Item(name='White paint', favorite=False, user=users[2], shop=shops[3]))

        db.session.add_all(items)
        db.session.commit()
        print("Items seeded")
