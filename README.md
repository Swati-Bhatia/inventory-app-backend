# inventory-app-backend
Basic application for inventory management

# Detailed steps on how to build and run:

# Step 1: Install the dependencies
RUN npm install

# Step 2: Build and run the project
RUN nodemon app.js

# Login Credeentials:

userName: admin
password: password
# API's build

1. POST - /auth/user/login - fetch the username and password from users table

2. GET - /api/products/ - fetch the list of products from products table
3. POST - /api/products/ - create a new product
4. GET - /api/products/:id - fetch the details of a specific product from  products table
5. PUT - /api/products/:id - delete the product/ update the status of the product

# Database export 

1. All the data export related queries are present in sql_queries folder
2. Create queries are mentioned in the schema.json
3. Data import queries for users and products table are mentioned in respective sql files