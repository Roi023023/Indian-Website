const Cart = require("../models/cart");

async function getCartByUser(userId) {
    return await Cart.findOne({ userId });
}

async function addToCart(userId, product) {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
        cart = new Cart({
            userId,
            items: []
        });
    }

    const existingItem = cart.items.find(
        item => item.productId.toString() === product.productId.toString() //
    );

    if (existingItem) {
        existingItem.quantity += product.quantity || 1;
    } else {
        cart.items.push(product);
    }

    cart.updatedAt = Date.now();
    await cart.save();

    return cart;
}

async function removeFromCart(userId, productId) {
    const cart = await Cart.findOne({ userId });

    if (!cart) return null;

    cart.items = cart.items.filter(
        item => item.productId.toString() !== productId
    );

    await cart.save();
    return cart;
}

module.exports = {
    getCartByUser,
    addToCart,
    removeFromCart
};