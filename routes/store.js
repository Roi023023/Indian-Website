const express = require('express');
const router = express.Router();
const Product = require('../models/products'); // Importing the product model

router.get('/', async (req, res) => {
    try {
        const products = await Product.find(); // Use the "Product" model to find items
        res.render('store', { products }); // Render the 'store.ejs' template with fetched products
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error fetching products');
    }
});

module.exports = router;
