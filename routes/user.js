const express = require('express');
const userController = require('../controllers/users'); // Import the user controller

const router = express.Router();

router.get('/', userController.getAllUsers); // Route to display all users
router.get('/:id/delete', userController.deleteUser); // Route to delete a user

module.exports = router;
