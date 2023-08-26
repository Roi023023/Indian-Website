const Product = require('../models/products');

const createProduct = async (name, price, category, color, gender, image) => {
    const product = new Product({
        name : name,
        price : price,
        category : category, 
        color : color, 
        gender : gender,
        image : image,
    });

    return await product.save(); 
};

const getProductById = async (id) => {
    return await Product.findById(id);
};

const getProductByName = async (name) => {
    return await Product.find({ name });
};

const getProducts = async () => {
    return await Product.find({}); 
};

const updateProduct = async (id, name, price, category, color, gender, image) => {
    const product = await getProductById(id);
    if (!product) 
        return null;

    product.name = name; 
    product.price = price;
    product.category = category;
    product.color = color;
    product.gender = gender;
    product.image = image;
    
    return await product.save(); 
};

const deleteProduct = async (id) => {
    const product = await getProductById(id);
    if (!product)
        return null;

    await product.remove();
    return product;
};

module.exports = {
    createProduct,
    getProductById,
    getProductByName,
    getProducts,
    updateProduct,
    deleteProduct
}