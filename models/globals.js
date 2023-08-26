

// global.js


//for priceRange_graph
const PriceRangeCounts = require('./models/priceRangeCounts');
const sup = require('./models/supplier');

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


//for supTime_graph
function getYearFromDate(date) {
    return date.getFullYear();
}

let supCount = 0;

let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //length 20
let names = ["sup", "sup", "sup",  "sup", "sup", "sup", "sup", "sup", "sup", "sup", "sup", "sup", "sup", "sup", "sup", "sup", "sup", "sup", "sup", "sup"]; //20

module.exports = {
    getNumPerPriceRange,
    incrementNumPerPriceRange,
    decrementNumPerPriceRange,
    getYearFromDate,
    supCount,
    numbers,
    names
};


