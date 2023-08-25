const express = require('express'); 
var router = express.Router(); 
const supplierController = require('../controllers/suppliers');

router.route('/')
    .get(supplierController.getSupplier)
    .post(supplierController.createSupplier);

router.route('/:id')
    .get(supplierController.getSupplier)
    .patch(supplierController.updateSupplier) 
    .delete(supplierController.deleteSupplier);

module.exports = router;