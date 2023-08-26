const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Import your User model

// Handle registration POST request
router.post('/registration', async (req, res) => {
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

        // Redirect to login page or any other page
        res.redirect('/login');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});

module.exports = router;