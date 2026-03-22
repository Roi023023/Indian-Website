//routes - admin.js

const express = require('express');
const adminController = require('../controllers/admin');
const requireAdmin = require('../middlewares/adminAuth');
const userController = require('../controllers/users');
const supplierController = require('../controllers/suppliers');
const productController = require("../controllers/products");

const router = express.Router();

// login routes
router.get('/login', adminController.getLoginPage);
router.post('/login', adminController.login);

// protected admin routes
router.use(requireAdmin);

router.get('/', adminController.getAdminPage);

// user operations
router.get('/all', userController.getAllUsers); // Route to display all , [Now accesed by /admin/all]
router.post('/:id/delete', userController.deleteUser); // Route to delete a user

// supplier operations
router.get('/suppliers', supplierController.getSuppliers); // Route to display all , [Now accesed by /admin/suppliers]
router.post('/suppliers/:id/delete', supplierController.deleteSupplier); // Route to delete a supplier
router.post('/suppliers/new', supplierController.updateSupplier); // Route to create a supplier

// product operations
router.get('/products', productController.getProducts); // Route to display all , [Now accesed by /admin/products]
router.post('/products/:id/delete', productController.deleteProduct); // Route to delete a product
router.post('/products/new', productController.createProduct); // Route to create a product

module.exports = router;
