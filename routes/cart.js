const express = require('express');
const cartController = require('../controllers/cart'); // Referencing the 'cart.js' controller file

const router = express.Router();

router.route('/').get(cartController.getCartPage); // Defining the route for the cart page

module.exports = router;
