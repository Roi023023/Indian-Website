const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    name: {
        type: String,
        isRequired: true
    },
    location: {
        type: String,
        isRequired: true
    },
    phone_number: {
        type: Number,
        isRequired: true
    },
    Collaboration_Date: {
        type: Date,
        default: Date.now,
        isRequired: true
    },
    //added start
    Collaboration_length: {
        type: Number,
        isRequired: true
    }
    //added finish
});

module.exports = mongoose.model('Supplier', SupplierSchema, "Suppliers");