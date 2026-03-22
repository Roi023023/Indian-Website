//cart controller
const cartService = require("../services/cart");

const getCartPage = async (req, res) => {

    const cart = await cartService.getCartByUser(req.user._id) || { items: [] };

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

    try {

        const userId = req.user._id;

        const product = {
            productId: req.params.productId,
            quantity: Number(req.body.quantity || 1)
        };

        await cartService.addToCart(userId, product);

        res.redirect("/cart");

    } catch (err) {

        console.error(err);
        res.status(500).send("Add to cart failed");

    }

};

const removeFromCart = async (req, res) => {

    try {

        await cartService.removeFromCart(
            req.user._id,
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