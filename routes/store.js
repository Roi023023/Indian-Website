const express = require('express');
const router = express.Router();
const product = require('../models/products'); // Importing the product model

router.get('/', async (req, res) => { // Make sure the route is '/store'
    try {
        const products = await product.find();
        res.render('Store', { product });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

module.exports = router;
