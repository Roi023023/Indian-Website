const express = require('express');
const adminController = require('../controllers/admin'); // Import the admin controller

const router = express.Router();

router.get('/', adminController.getAdminPage); // Route to the admin page

module.exports = router;
