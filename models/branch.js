const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
    city: {
        type: String,
        isRequired: true
    },
    country: {
        type: String,
        isRequired: true
    },
    established: {
        type: Date,
        isRequired: true
    }
});

module.exports = mongoose.model('Branch', BranchSchema, "branches");