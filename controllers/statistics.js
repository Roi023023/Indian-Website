const Product = require('../models/products');

const getStatisticsPage = async (req, res) => {
  const priceRangeCounts = await Product.getPriceRangeCounts();
  res.render('statistics', { priceRangeCounts });
};

module.exports = { getStatisticsPage };
