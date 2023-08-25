const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    name: {
        type: String,
        isRequired: true
    },
    price: {
        type: Number,
        isRequired: true
    },
    category: {
        type: Number,
        isRequired: true
    },
    color: {
        type: Date,
        default: Date.now,
        isRequired: true
    },
    gender: {
        type: Date,
        default: Date.now,
        isRequired: true
    },
    image: {
        type: Date,
        default: Date.now,
        isRequired: true
    },
});

module.exports = mongoose.model('Supplier', SupplierSchema, "Suppliers");