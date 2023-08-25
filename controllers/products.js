// Import the module responsible for handling Product-related data
const productService = require('../services/products');

// Define a function to create a new Product
// Activates when address ends with / 
const createProduct = async (req, res) => {
    const newProduct = await productService.createProduct(req.body.name, req.body.price, req.body.category, req.body.color, req.body.gender, req.body.image);
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


const updateProduct = async (req, res) => {
    /*if (!req.body.name) {
        res.status(400).json({ message: "Name is required" });
    }*/
    const Product = await ProductService.updateProduct(req.params.id, req.body.name, req.body.price, req.body.category, req.body.color, req.body.gender, req.body.image);
    if (!Product) {
        return res.status(404).json({ errors: ['Product not found'] });
    }
    res.json(Product);
};

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
    updateProduct,
    deleteProduct
};