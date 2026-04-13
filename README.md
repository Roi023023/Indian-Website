# DIKANA Store

An e-commerce web application that allows users to browse products, manage a cart, and complete a checkout process, and allows admins to manage the store.

##  Key Highlights

- Full MVC architecture (Controllers, Models, Views, Services)
- Role-based access control (Admin vs User)
- Secure authentication with hashed passwords
- Modular backend structure for scalability

## About this project

This project was built to practice building a full-stack e-commerce system using a DB,
including authentication, cart management, admin dashboards, and persistent data storage with MongoDB.

As well as to train me on using AI as a tool with proper understanding of the building process,
and to possibly enable more complex developments to the website (whether in full stack or other fields). 

## Simple access instructions - No additional setup is required.
- For the sake of convenience I made a dedicated demo database for your use
  (a .env file is included in the project with read/write permissions only)
- To enter the DIKANA website, go to terminal and enter: 
  npm install then npm start
  then Open in your browser: http://localhost:3000/ (or click the link)
- For testing user use, you can register via the register button in the homepage
- For testing admin use, login with - [username: caine], [password: WDadmin123] 
- Feel free to test all features freely, the DB was created specifically for you!

## Features
### General
- Secure routes (protected endpoints)
- Separation of admin and user functionalities via routes and middlewares
- Persistent data (MongoDB Atlas)
- Hashed passwords
- Secure access to data base via .env 

### User:
- User authentication (login/register/logout)
- Search items in store
- Add and remove items from cart 
- Checkout system with validation

### Admin
- Admin authentication (login/logout)
- View all users, Search, Update and Remove users  
- View all products, Search, Add, Update and Remove products
- View all suppliers, Search, Add, Update and Remove suppliers
- View basic statistics

## Tech Stack
- Frontend: HTML, CSS and JS
- Backend: Node.js, Express
- Database: (MongoDB Atlas)
- Other: express-ejs-layouts, express-session, dotenv, bcrypt

## Project Structure
INDIAN-WEBSITE (Root) {
    controllers: {
        admin.js
        branch.js
        cart.js
        checkout.js
        home.js
        login.js
        logout.js
        products.js
        registration.js
        statistics.js
        users.js
    }

    middlewares: {
        adminAuth.js
        authMiddleware.js
        requestAuth.js
        validateCheckout.js
    }

    models: {
        admin.js
        branch.js
        cart.js
        products.js
        supplier.js
        user.js
    }

    node_modules

    public: {
        css: {
            admin.css
            cart.css
            general.css
            home.css
            layout.css
            product-table.css
            statistics.css
        }
        js: {
            cart.js
            logout.js
            statistics.js
        }
    }

    routes: {
        admin.js
        branch.js
        cart.js
        checkout.js
        home.js
        logIn.js
        logout.js
        products.js
        registration.js
        store.js
        supplier.js
        user.js
    }

    services: {
        branches.js
        cart.js
        products.js
        suppliers.js
        users.js
    }

    views: {
        admin: {
            allProducts.ejs
            allSuppliers.ejs
            allUsers.ejs
        }
        Admin_Page.ejs
        cart.ejs
        Checkout.ejs
        HomePage.ejs
        layout.ejs
        Login_Page.ejs
        newProduct.ejs
        newSupplier.ejs
        Registration.ejs
        statistics.ejs
        Store.ejs
    }

    .env (For your personal use DB)
    .gitattributes
    .gitignore
    index.js
    package-lock.json
    package.json

    README.md
}

## What I would improve next
UI/UX polish
Add payment integration (Stripe)
Add available stock logic
Branch logic (differing stocks, differing shipment prices)
Improve error handling

