// supplier routes
const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/suppliers');

router.route('/')
    .get(supplierController.getSuppliers)
    .post(supplierController.createSupplier);

router.route('/:id')
    .get(supplierController.getSupplierById)
    .patch(supplierController.updateSupplier)
    .delete(supplierController.deleteSupplier);

module.exports = router;