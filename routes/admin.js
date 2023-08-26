const express = require('express');
const adminController = require('../controllers/admin'); // Referencing the 'admin.js' controller file

const router = express.Router();

router.route('/').get(adminController.getAdminPage); // Defining the route for the admin page

module.exports = router;
