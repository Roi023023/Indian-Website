//index.js

//connection to mongoose
require('dotenv').config(); // loads .env variables
console.log('MONGO_URI:', process.env.MONGO_URI);
const mongoose = require('mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const bcrypt = require('bcrypt');
const expressLayouts = require('express-ejs-layouts');

// Initialize Express app
const app = express();

app.engine("ejs", require("ejs").__express); //like this

app.set('view engine', 'ejs'); //AND this?
app.use(expressLayouts);
app.set('layout', 'layout'); // views/layout.ejs

// Initialize the session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// layout middlewares
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

////New 'user available to views' 
//. because both index.js and middlewares are from root directory
const attachUser = require('./middlewares/authMiddleware');
app.use(attachUser);
////


mongoose.set('strictQuery', false);

//security risk line removed - will add .env file instead of mongoose.conect
/*mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.error(err));*/

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected!'))
.catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // exit if DB fails
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    // You can get the logged-in user from session
    const user = req.session.user || null;

    // Render homepage.ejs (make sure file exists in /views)
    res.render('homepage', { user });
});

const adminRoutes = require('./routes/admin'); // Referencing the 'admin.js' routes file
const loginRoutes = require('./routes/logIn'); // Referencing the 'login.js' routes file
const registrationRoutes = require('./routes/registration'); // Referencing the 'registreation.js' routes file
const storeRoutes = require('./routes/store') // Referencing the 'store.js' routes file
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart'); // Referencing the 'cart.js' routes file
const Product = require('./models/products');
const User = require('./models/user'); 
const checkoutRoutes = require('./routes/checkout'); 
//const statisticsRoutes = require('./routes/statistics'); // statistics route managed by admin
const logoutRoutes = require('./routes/logout');

app.use('/store', storeRoutes); // Associating the store routes with the '/store' path
app.use('/admin', adminRoutes); // Associating the admin routes with the '/admin' path
app.use('/login', loginRoutes); // Associating the login routes with the '/login' path
app.use('/registration', registrationRoutes); // Associating the registreation routes with the '/registreation' path
app.use('/users', userRoutes); // Use the user routes
app.use('/cart', cartRoutes); // Associating the cart routes with the '/cart' path
app.use('/checkout', checkoutRoutes); // Associating the checkout routes with the '/checkout' path
//app.use('/statistics', statisticsRoutes); // statistics route managed by admin
app.use('/logout', logoutRoutes);

app.get('/registration', (req, res) => {
    res.render('Registration'); // Render the registration page
});


//// Primitive 'user available to views'
//app.use((req, res, next) => {
    //res.locals.user = req.session.user; // Attach user data to res.locals
    //next();
//});
////


// Render the home page with user data (if available) - handled by home routes(?)
//app.get('/', (req, res) => {
    // Assuming you have a user object from your authentication logic
    //const user = req.session.user; // This is just an example, you should have your actual user object
    
    //res.render('homepage', { user }); // Pass the user object to the template
//});

// Should be handled by store routes
//app.get('/store', async (req, res) => {
    //try {
        //const products = await Product.find(); // Fetch product from the database
        //res.render('store', { products }); // Render the 'store.ejs' template with fetched products
    //} catch (error) {
        //console.error('Error fetching products:', error);
        //res.status(500).send('Error fetching products');
    //}
//});

// Should be handled by registration routes
//app.post('/registreation', async (req, res) => {
    //try {
        //const { username, password } = req.body;

        // Check if the username is already taken
        //const existingUser = await User.findOne({ username });
        //if (existingUser) {
            //return res.status(400).send('Username already taken');
        //}

        // Create a new user (with hashed password)
        //const hashedPassword = await bcrypt.hash(password, 10);

        //const newUser = new User({
            //username,
            //password: hashedPassword
        //});

        //await newUser.save();

        // Redirect to login page or wherever you want
        //res.redirect('/login');
    //}  catch (error) {
        //console.error('Error registreation user:', error.message); // Log the specific error message
        //res.status(500).send('Error in user registreation');
    //}
    
//});

const http = require('http').Server(app);
// app.set("io", someSocketFile);
http.listen(3000, () => {
    console.log('Server is running on port 3000'); // Correct the port number here
});

