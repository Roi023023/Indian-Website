// globals.js

const numPerPriceRange = [0, 0, 0]; // Initialize with default values

const getNumPerPriceRange = (priceRange) => {
    if (priceRange >= 1 && priceRange <= 3) {
        return numPerPriceRange[priceRange - 1];
    } else {
        throw new Error('Invalid price range');
    }
};

const incrementNumPerPriceRange = (priceRange) => {
    if (priceRange >= 1 && priceRange <= 3) {
        numPerPriceRange[priceRange - 1]++;
    } else {
        throw new Error('Invalid price range');
    }
};

const decrementNumPerPriceRange = (priceRange) => {
    if (priceRange >= 1 && priceRange <= 3) {
        numPerPriceRange[priceRange - 1]--;
    } else {
        throw new Error('Invalid price range');
    }
};

module.exports = {
    getNumPerPriceRange,
    incrementNumPerPriceRange,
    decrementNumPerPriceRange
};
