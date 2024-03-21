# Full-Stack Application "Shopping List"

In this README file, you can find an explanation of:
* What this application has
* What users can do with this application
* Structure of files
* What is each file for
* How it works  - outline
* How each section works

## Introduction
This application has:
- A React application as frontend
- A Flask application as backend

## What user can do with this application
User can view the shopping list and add, edit and delete items in the list.

---

## The Directory Structure

.
├── CONTRIBUTING.md
├── LICENSE.md
├── Pipfile
├── Pipfile.lock
├── README.md
├── client
│   ├── README.md
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
│       ├── components
│       │   ├── AddItemForm.js
│       │   ├── AddShopForm.js
│       │   ├── AddUserForm.js
│       │   ├── App.js
│       │   ├── EditItemForm.js
│       │   ├── ItemList.js
│       │   ├── Items.js
│       │   ├── ListByShops.js
│       │   ├── ListByUsers.js
│       │   ├── NavBar.js
│       │   ├── Shops.js
│       │   └── Users.js
│       ├── index.css
│       └── index.js
└── server
    ├── app.py
    ├── config.py
    ├── instance
    ├── migrations
    ├── models.py
    ├── node_modules
    └── seed.py
```
>Models
This application handle three models, User, Shop and Item. Database models are defined inside of models.py file.
Item belongs to User and Shop, and User and Shop have many Items.
User and Shop have reciprocal rellationship through Item.

> 


