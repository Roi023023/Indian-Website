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
    image: {
        type: String,
        isRequired: true
    },
    //added start
    priceRange: {
        type: Number,
        isRequired: true
    }
    //added finish
});

const PriceRangeCountsSchema = new Schema({
    priceRange: Number,
    count: Number,
});

module.exports = mongoose.model('Product', ProductSchema, "Products");
//added start
module.exports = mongoose.model('PriceRangeCounts', PriceRangeCountsSchema, 'priceRangeCounts');
//added finish
