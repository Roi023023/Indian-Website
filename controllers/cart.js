//cart controller
const cartService = require("../services/cart");
const Product = require('../models/products');

const getCartPage = async (req, res) => {

    if (!req.session.user) {
        return res.redirect('/login');
    }
    
    const cart = await cartService.getCartByUser(req.session.user._id) || { items: [] };

    const total = cart.items.reduce((sum, item) => {

        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;

        return sum + price * quantity;

    }, 0);

    res.render("cart", {
        cart,
        total,
        // dont show register button
        showRegister: false 
    });

};

const addToCart = async (req, res) => {

    if (!req.session.user) {
        return res.redirect('/login');
    }

    //const userId = req.session.user._id;

    try {

        const dbProduct = await Product.findById(req.params.productId);

        if (!dbProduct) {
            return res.status(404).send("Product not found");
        }

        const product = {
            productId: req.params.productId,
            name: dbProduct.name,
            price: dbProduct.Price,
            quantity: Number(req.body.quantity || 1)
        };
        
        await cartService.addToCart(req.session.user._id, product);

        res.redirect("/cart");

    } catch (err) {

        console.error(err);
        res.status(500).send("Add to cart failed");

    }

};

const removeFromCart = async (req, res) => {

    try {

        await cartService.removeFromCart(
            req.session.user._id,
            req.params.productId
        );

        res.redirect("/cart");

    } catch (err) {

        console.error(err);
        res.status(500).send("Remove failed");

    }

};

module.exports = {
    getCartPage,
    addToCart,
    removeFromCart
};