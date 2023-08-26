const productService = require('../services/products');

const createProduct = async (req, res) => {
    const newProduct = await productService.createProduct(req.body.name, req.body.price, req.body.category, req.body.color, req.body.gender, req.body.image);
    res.json(newProduct);
};

const getProducts = async (req, res) => {
    const products = await productService.getProducts();
    res.json(products);
};

const getProduct = async (req, res) => {
    const product = await productService.getProductById(req.params.id);
    res.json(product);
};

const updateProduct = async (req, res) => {
    const Product = await ProductService.updateProduct(req.params.id, req.body.name, req.body.price, req.body.category, req.body.color, req.body.gender, req.body.image);
    res.json(Product);
};

const deleteProduct = async (req, res) => {
    const product = await productService.deleteProduct(req.params.id);
    res.json(product);
};

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
};