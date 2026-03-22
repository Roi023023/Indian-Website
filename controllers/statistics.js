const Product = require('../models/products');

const getStatisticsPage = async (req, res) => {
  const priceRangeCounts = await Product.getPriceRangeCounts();
  res.render('statistics', { priceRangeCounts }, {
        // dont show register button
        showRegister: false 
    })
};

module.exports = { getStatisticsPage };
