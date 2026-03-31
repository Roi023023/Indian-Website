// no need for model the data is derived, no storage needed
const productService = require('../services/products');

const getStatisticsPage = async (req, res) => {
  const priceRangeCounts = await productService.getPriceRangeCounts();
    res.render('statistics', { 
        priceRangeCounts,
        showRegister: false
    });
};

module.exports = { getStatisticsPage };
