const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    established: {
        type: Date,
        required: true
    }
}, { timestamps: true }); //MongoDB automatically stores: createdAt updatedAt

module.exports = mongoose.model('Branch', BranchSchema, "branches");