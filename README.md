# Full-Stack Application "Shopping List"

## Overview

Welcome to the "Shopping List" application README. This document serves as a comprehensive guide to understanding the functionalities, structure, and usage of this application. Below, you will find detailed explanations of the application's components, user capabilities, directory structure, and functionality.

---

## Introduction

The "Shopping List" application is a full-stack solution designed to facilitate efficient management of shopping lists. It comprises a React frontend and a Flask backend, providing users with seamless interaction and robust functionality.

## User Interaction

Users can perform the following actions within the application:

- View the shopping list
- Add, edit, and delete items from the list
- View a list of registered users and shops
- Add, edit, and delete users and shops

---

## Directory Structure
```bash
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
├── image.png
└── server
    ├── app.py
    ├── config.py
    ├── instance
    ├── migrations
    ├── models.py
    ├── node_modules
    └── seed.py

```

---

## Models and Relationships

The application employs three primary models:

- **User**
- **Shop**
- **Item**

These models are defined within the `models.py` file and maintain relationships as follows:

- An **Item** belongs to both a **User** and a **Shop**.
- Both **User** and **Shop** can have multiple associated **Items**.
- The reciprocal relationship between **User** and **Shop** is managed through the `users_shops` join table, ensuring database-level data integrity.

![alt text](image-1.png)

---

## Functionality

The application features three main pages:

### Home (Shopping List)

Users can:

- View the shopping list
- Sort items by shop or user
- Edit, delete, and add items

### Users

Users can:

- View a list of registered users
- Delete and add users

### Shops

Users can:

- View a list of registered shops
- Delete and add shops

---

## Error Handling

User input is validated by Yup on the client side, and SQL constraints on the server side.

---

## API

Database tables are configured within the application's database (`app.db`). There are no external APIs utilized.

---

## Security

This application does not currently implement user authentication or authorization mechanisms.

---

## Installation Instructions

To run this application locally, follow these steps:

### Client Side:

1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Start the client server: `npm start`

### Server Side:

1. Install Pipenv if not already installed: `pip install pipenv`
2. Navigate to the server directory: `cd server`
3. Install dependencies: `pipenv install`
4. Activate the virtual environment: `pipenv shell`
5. Start the Flask server: `python app.py`

---

This README provides a comprehensive overview of the "Shopping List" application, including its structure, functionality, and user capabilities. For further assistance or inquiries, please refer to the documentation or contact the project maintainers.
