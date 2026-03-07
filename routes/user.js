// user routes
const express = require('express');
const userController = require('../controllers/users'); // Import the user controller
const requestAuth = require('../middlewares/requestAuth');

const router = express.Router();

// protected routes
router.use(requestAuth);
router.get('/', userController.getUserPage); // Upon regular login, route to user page 

module.exports = router;
