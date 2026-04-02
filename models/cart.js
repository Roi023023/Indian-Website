const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product"
    },

    name: {                  
        type: String,
        required: true
    },

    image: {                 
        type: String,
        required: true
    },

    description: {           
        type: String,
        default: ""
    },

    quantity: {
        type: Number,
        default: 1
    },

    price: {
        type: Number,
        required: true
    }

}, { timestamps: true });

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