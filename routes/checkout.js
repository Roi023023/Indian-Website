const express = require('express');
const checkoutController = require('../controllers/checkout'); // Referencing the 'checkout.js' controller file

const router = express.Router();

router.route('/').get(checkoutController.getCheckoutPage); // Defining the route for the checkout page

module.exports = router;