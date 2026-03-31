//routes - admin.js

const express = require('express');
const adminController = require('../controllers/admin');
const requireAdmin = require('../middlewares/adminAuth');
const userController = require('../controllers/users');
const supplierController = require('../controllers/suppliers');
const productController = require("../controllers/products");
const statisticsController = require('../controllers/statistics'); 

const router = express.Router();

// login routes
router.get('/login', adminController.getLoginPage);
router.post('/login', adminController.login);

// protected admin routes
router.use(requireAdmin);

router.get('/', adminController.getAdminPage);

router.get('/statistics', statisticsController.getStatisticsPage); // Defining the route for the statistics page

// user operations
router.get('/all', userController.getAllUsers); // Route to display all , [Now accesed by /admin/all]
router.post('/users/:id/delete', userController.deleteUser); // Route to delete a user

// supplier operations
router.get('/suppliers', supplierController.getSuppliers); // Route to display all , [Now accesed by /admin/suppliers]
router.post('/suppliers/:id/delete', supplierController.deleteSupplier); // Route to delete a supplier
router.post('/suppliers/:id/update', supplierController.updateSupplier); // Route to update a supplier

router.get('/suppliers/new', (req, res) => {
    res.render('newSupplier', { showRegister: false });
});

router.post('/suppliers/new', supplierController.createSupplier); // Route to create a supplier

// product operations
router.get('/products', productController.getProducts); // Route to display all , [Now accesed by /admin/products]
router.post('/products/:id/delete', productController.deleteProduct); // Route to delete a Product
router.post('/products/:id/update', productController.updateProduct); // Route to update a product

// Show the "New Product" form
router.get('/products/new', (req, res) => {
    res.render('newProduct', { showRegister: false });
});

router.post('/products/new', productController.createProduct); // Route to create a product

module.exports = router;
