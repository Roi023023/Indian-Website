
// models/priceRangeCounts.js
const mongoose = require('mongoose');

const priceRangeCountsSchema = new mongoose.Schema({
    range: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('PriceRangeCounts', priceRangeCountsSchema);
