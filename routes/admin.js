//routes - admin.js

const express = require('express');
const adminController = require('../controllers/admin');
const requireAdmin = require('../middlewares/adminAuth');

const router = express.Router();

// login routes
router.get('/login', adminController.getLoginPage);
router.post('/login', adminController.login);

// protected admin routes
router.use(requireAdmin);

router.get('/', adminController.getAdminPage);

module.exports = router;
