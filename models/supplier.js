const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    Collaboration_Date: {
        type: Date,
        default: Date.now,
        required: true
    },
}, { timestamps: true }); //MongoDB automatically stores: createdAt updatedAt

module.exports = mongoose.model('Supplier', SupplierSchema, "Suppliers");