const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },
    quantity: {
        type: Number,
        default: 1
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true }); //MongoDB automatically stores: createdAt updatedAt

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    items: [cartItemSchema],
}, { timestamps: true }); //MongoDB automatically stores: createdAt updatedAt

module.exports = mongoose.model("Cart", cartSchema, "Carts");