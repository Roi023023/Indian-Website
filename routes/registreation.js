// Registreation route - handle creating new users

const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registration');

// show registration page
router.get('/', registrationController.getRegistrationPage);

// handle form submission
router.post('/', registrationController.registerUser);

module.exports = router;