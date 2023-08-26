const express = require('express');
var router = express.Router(); 
const productController = require('../controllers/products'); 


router.route('/')
    .get(productController.getProduct) 
    .post(productController.createProduct);

     router.route('/:id')
    .get(productController.getProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router; 



/************************************************************************* */
const { createHall, getHalls, deleteHall, editHall } = require('../controllers/hall');

router.route('/')
    .post(createHall)
    .get(getHalls)

router.route('/:id')
    .delete(deleteHall)
    .put(editHall)

module.exports = router;