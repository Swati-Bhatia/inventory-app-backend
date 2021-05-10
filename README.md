# inventory-app-backend
Detailed steps on how to build and run:

# Step 1: Install the dependencies
RUN npm install

# Step 2: Build and run the project
RUN nodemon app.js


# API's build

POST - /auth/user/login - fetch the username and password from users table

GET - /api/products/ - fetch the list of products from products table
POST - /api/products/ - create a new product
GET - /api/products/:id - fetch the details of a specific product from products table
PUT - /api/products/:id - delete the product/ update the status of the product

# Database export 

All the data export related queries are present in sql_queries folder
Create queries are mentioned in the schema.json
Data import queries for users and products table are mentioned in respective sql files