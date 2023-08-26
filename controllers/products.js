// Import the module responsible for handling supplier-related data
const product = require('../models/product');
const productService = require('../services/products');

// Define a function to create a new supplier
// Activates when address ends with / 
const createProduct = async (req, res) => {
    const newProduct = await productService.createProduct(req.body.name);
    res.json(newProduct);
};

// Define a function to get all suppliers
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
/*const updateSupplier = async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ message: "Name is required" });
    }
    const supplier = await supplierService.updateSupplier(req.params.id, req.body.name);
    if (!supplier) {
        return res.status(404).json({ errors: ['Supplier not found'] });
    }
    res.json(supplier);
};*/



// Define a function to delete a supplier
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
    //updateSupplier,
    deleteProduct
};