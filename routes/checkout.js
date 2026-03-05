const express = require('express');
const checkoutController = require('../controllers/checkout'); // Referencing the 'checkout.js' controller file
const requestAuth = require('../middlewares/requestAuth');

const router = express.Router();

router.use(requestAuth);

router.route('/').get(checkoutController.getCheckoutPage); // Defining the route for the checkout page

module.exports = router;