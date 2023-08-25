const product = require('../models/product');
const Product = require('../models/products');

const createProduct = async (name, price, image) => {
    //added start
    let priceRange;

    if (price > 0 && price < 11) {
        priceRange = 0;
    } else if (price >= 11 && price < 21) {
        priceRange = 1;
    } else if (price >= 21 && price < 31) {
        priceRange = 2;
    } else if (price >= 31 && price < 41) {
        priceRange = 3;
    } else {
        //is not supposed to happen
    }
    //added finish


    const product = new Product({
        name : name,
        price : price,
        image : image,
        //added start
        priceRange:priceRange
        //added finish
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


const updateProduct = async (id, name, price, image) => {
    const product = await getProductById(id);
    if (!product) 
        return null;

    product.name = name; 
    product.price = price;
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
    createSupplier,
    getSupplierById,
    getSuppliers,
    updateSupplier,
    deleteSupplier
}