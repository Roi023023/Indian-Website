const express = require('express');
const statisticsController = require('../controllers/statistics'); // Referencing the 'statistics.js' controller file
const requestAuth = require('../middlewares/requestAuth');

const router = express.Router();

router.use(requestAuth);

router.route('/').get(statisticsController.getStatisticsPage); // Defining the route for the statistics page

module.exports = router;