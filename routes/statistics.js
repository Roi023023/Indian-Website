const express = require('express');
const statisticsController = require('../controllers/statistics'); // Referencing the 'statistics.js' controller file

const router = express.Router();

router.route('/').get(statisticsController.getStatisticsPage); // Defining the route for the statistics page

module.exports = router;