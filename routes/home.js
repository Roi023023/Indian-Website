const express = require('express');
const HomeController = require('../controllers/home');

const router = express.Router();

router.route('/').get(HomeController.index);

// Redirect route for the "Home" button
router.get('/homepage.ejs', (req, res) => {
    res.redirect('/'); // Replace with the actual route to your homepage.ejs page
});

module.exports = router;
