// Import the module responsible for handling Product-related data
const product = require('../models/product');
const productService = require('../services/products');

// Define a function to create a new Product
// Activates when address ends with / 
const createProduct = async (req, res) => {
    const newProduct = await productService.createProduct(req.body.name);
    res.json(newProduct);
};

// Define a function to get all Products
// activates if address ends with / 
const getProducts = async (req, res) => {
    const products = await productService.getProducts();
    res.json(products);
};

// Define a function to get a specific product by ID
// Activates if address ends with /:id
const getProduct = async (req, res) => {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
        return res.status(404).json({ errors: ['Product not found'] });
    }
    res.json(product);
};



// Define a function to update a product's information
//(if you want to be able to update product)
// Activates if adress ends with /:id
/*const updateProduct = async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ message: "Name is required" });
    }
    const Product = await ProductService.updateProduct(req.params.id, req.body.name);
    if (!Product) {
        return res.status(404).json({ errors: ['Product not found'] });
    }
    res.json(Product);
};*/



// Define a function to delete a Product
// Activates if adress ends with /:id
const deleteProduct = async (req, res) => {
    const product = await productService.deleteProduct(req.params.id);
    if (!product) {
        return res.status(404).json({ errors: ['Product not found'] });
    }
    res.send();
};

// Export all the defined controller functions
module.exports = {
    createProduct,
    getProducts,
    getProduct,
    //updateProduct,
    deleteProduct
};