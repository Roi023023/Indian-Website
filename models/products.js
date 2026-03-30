const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true }); //MongoDB automatically stores: createdAt updatedAt

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