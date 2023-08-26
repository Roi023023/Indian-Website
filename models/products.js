const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Name: {
        type: String,
        isRequired: true
    },
    Price: {
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

ProductSchema.statics.getPriceRangeCounts = async function() {
    return this.aggregate([
      {
        $bucket: {
          groupBy: "$price",
          boundaries: [0, 11, 21, 31],
          default: "31+",
          output: {
            count: { $sum: 1 }
          }
        }
      }
    ]);
  };

module.exports = mongoose.model('Product', ProductSchema, "Products");