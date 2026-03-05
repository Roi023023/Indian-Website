const cartService = require("../services/cart");

const getCartPage = async (req, res) => {
    const cart = await cartService.getCartByUser(req.user._id);

    res.render("cart", {
        cart: cart || { items: [] }
    });
};

const addToCart = async (req, res) => {
    try {
        const userId = req.user._id;

        const product = {
            productId: req.params.productId,
            price: Number(req.body.price || 0),
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
        res.status(500).send("Remove failed");
    }
};

module.exports = {
    getCartPage,
    addToCart,
    removeFromCart
};