const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BranchSchema = new Schema({
    lat: {
        type: String,
        isRequired: true
    },
    long: {
        type: String,
        isRequired: true
    }
});

module.exports = mongoose.model('Branch', BranchSchema, "branches");