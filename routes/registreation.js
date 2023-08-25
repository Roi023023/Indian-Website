const express = require('express');
const registrationController = require('../controllers/registration'); // Import the registration controller

const router = express.Router();

router.get('/', registrationController.getRegistrationPage); // Fix typo here
router.post('/', registrationController.registerUser); // Fix typo here

module.exports = router;
