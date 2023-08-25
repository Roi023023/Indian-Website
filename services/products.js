const product = require('../models/product');
const Product = require('../models/products');

const createProduct = async (name, price, category, color, gender, image) => {

    const product = new Product({
        name : name,
        price : price,
        category:category, 
        color:color, 
        gender:gender,
        image : image,
    });

    // if (Collaboration_Date)
        // supplier.Collaboration_Date = Collaboration_Date;

    return await product.save(); 
};


const getProductById = async (id) => {
    return await Product.findById(id);
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
    
    
    await product.save(); 
    return product;
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
    getProducts,
    updateProduct,
    deleteProduct
}