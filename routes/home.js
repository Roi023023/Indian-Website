const express = require('express');
const HomeController = require('../controllers/home');
const authMiddleware = require('../middlewares/authMiddleware'); // Import your authentication middleware

const router = express.Router();

// Apply the authentication middleware to protected routes
router.get('/', authMiddleware, HomeController.index);

// Redirect route for the "Home" button
router.get('/homepage.ejs', (req, res) => {
    res.redirect('/'); // Replace with the actual route to your homepage.ejs page
});

module.exports = router;

