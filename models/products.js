const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        isRequired: true
    },
    price: {
        type: Number,
        isRequired: true
    },
    category: {
        type: String,
        isRequired: true
    },
    color: {
        type: String,
        isRequired: true
    },
    gender: {
        type: String,
        isRequired: true
    },
    image: {
        type: String,
        isRequired: true
    }
});

module.exports = mongoose.model('Product', ProductSchema, "Products");