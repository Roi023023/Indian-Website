// global.js
const PriceRangeCounts = require('./models/priceRangeCounts');

const getNumPerPriceRange = async (priceRange) => {
    if (priceRange >= 1 && priceRange <= 3) {
        const priceRangeCounts = await PriceRangeCounts.findOne({ range: priceRange });
        return priceRangeCounts ? priceRangeCounts.count : 0;
    } else {
        throw new Error('Invalid price range');
    }
};

const incrementNumPerPriceRange = async (priceRange) => {
    if (priceRange >= 1 && priceRange <= 3) {
        let priceRangeCounts = await PriceRangeCounts.findOne({ range: priceRange });

        if (priceRangeCounts) {
            priceRangeCounts.count++;
            await priceRangeCounts.save();
        }
    } else {
        throw new Error('Invalid price range');
    }
};

const decrementNumPerPriceRange = async (priceRange) => {
    if (priceRange >= 1 && priceRange <= 3) {
        let priceRangeCounts = await PriceRangeCounts.findOne({ range: priceRange });

        if (priceRangeCounts && priceRangeCounts.count > 0) {
            priceRangeCounts.count--;
            await priceRangeCounts.save();
        }
    } else {
        throw new Error('Invalid price range');
    }
};

module.exports = {
    getNumPerPriceRange,
    incrementNumPerPriceRange,
    decrementNumPerPriceRange
};


