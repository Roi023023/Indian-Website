//routes - admin.js

const express = require('express');
const adminController = require('../controllers/admin');
const requireAdmin = require('../middlewares/adminAuth');
const userController = require('../controllers/users');

const router = express.Router();

// login routes
router.get('/login', adminController.getLoginPage);
router.post('/login', adminController.login);

// protected admin routes
router.use(requireAdmin);
router.get('/all', userController.getAllUsers); // Route to display all , [Now accesed by /admin/all]
router.post('/:id/delete', userController.deleteUser); // Route to delete a user
router.get('/', adminController.getAdminPage);

module.exports = router;
