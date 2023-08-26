const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const router = express.Router();

// Initialize Express app
const app = express();

// Initialize the session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://roi023023:roi023023@cluster0.3xjnmpk.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(express.json());

app.use('/', require('./routes/home'));

const adminRoutes = require('./routes/admin'); // Referencing the 'admin.js' routes file
const loginRoutes = require('./routes/logIn'); // Referencing the 'login.js' routes file
const registreationRoutes = require('./routes/registreation'); // Referencing the 'registreation.js' routes file
const storeRoutes = require('./routes/store') // Referencing the 'store.js' routes file
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart'); // Referencing the 'cart.js' routes file
const Product = require('./models/products');
const User = require('./models/user'); // Assuming you have a User model
const checkoutRoutes = require('./routes/checkout'); // Referencing the 'checkout.js' routes file
const statisticsRoutes = require('./routes/statistics'); // Referencing the 'statistics.js' routes file

app.use('/store', storeRoutes); // Associating the store routes with the '/store' path
app.use('/admin', adminRoutes); // Associating the admin routes with the '/admin' path
app.use('/login', loginRoutes); // Associating the login routes with the '/login' path
app.use('/registreation', registreationRoutes); // Associating the registreation routes with the '/registreation' path
app.use('/users', userRoutes); // Use the user routes
app.use('/cart', cartRoutes); // Associating the store routes with the '/cart' path

app.get('/registration', (req, res) => {
    res.render('Registration'); // Render the registration page
});

app.use((req, res, next) => {
    res.locals.user = req.session.user; // Attach user data to res.locals
    next();
});
// Render the home page with user data (if available)
app.get('/', (req, res) => {
    // Assuming you have a user object from your authentication logic
    const user = req.session.user; // This is just an example, you should have your actual user object
    
    res.render('homepage', { user }); // Pass the user object to the template
});

app.get('/store', async (req, res) => {
    try {
        const products = await Product.find(); // Fetch product from the database
        res.render('store', { products }); // Render the 'store.ejs' template with fetched products
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

app.post('/registration', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the username is already taken
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).send('Username already taken');
        }

        // Create a new user
        const newUser = new User({ username, password });
        await newUser.save();

        // Redirect to login page or wherever you want
        res.redirect('/login');
    }  catch (error) {
        console.error('Error registering user:', error.message); // Log the specific error message
        res.status(500).send('Error registering user');
    }
    
});

const http = require('http').Server(app);
// app.set("io", someSocketFile);
http.listen(3000, () => {
    console.log('Server is running on port 3000'); // Correct the port number here
});

