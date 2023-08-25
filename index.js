const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');

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

app.use('/store', storeRoutes); // Associating the store routes with the '/store' path
app.use('/admin', adminRoutes); // Associating the admin routes with the '/admin' path
app.use('/login', loginRoutes); // Associating the login routes with the '/login' path
app.use('/registreation', registreationRoutes); // Associating the registreation routes with the '/registreation' path


app.use((req, res, next) => {
    res.locals.user = req.session.user; // Attach user data to res.locals
    next();
});
// Render the home page with user data (if available)
app.get('/', (req, res) => {
    // Assuming you have a user object from your authentication logic
    const user = req.user; // This is just an example, you should have your actual user object
    
    res.render('homepage', { user }); // Pass the user object to the template
});



app.get('/store', async (req, res) => {
    try {
        const products = await product.find(); // Fetch product from the database
        res.render('store', { products }); // Render the 'store.ejs' template with fetched products
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

const http = require('http').Server(app);
// app.set("io", someSocketFile);
http.listen(3000, () => {
    console.log('Server is running on port 3000'); // Correct the port number here
});

