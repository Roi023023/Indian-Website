//checkout routes
const express = require('express');
const requestAuth = require('../middlewares/requestAuth');
const { validateCheckout } = require("../middlewares/validateCheckout");
const checkoutController = require('../controllers/checkout');

const router = express.Router();

// Require login/auth middleware
router.use(requestAuth);

// POST /checkout → validate inputs, then handle inline
router.post("/", validateCheckout, (req, res) => {
    const { holder, cardNumber, exp, cvv } = req.body;

    console.log(holder, cardNumber, exp, cvv); // just to confirm inputs

    // You can replace this with your controller logic later
    res.send("Checkout successful!");
});

router.get('/', checkoutController.getCheckoutPage); // Upon regular login, route to user page 

module.exports = router;
