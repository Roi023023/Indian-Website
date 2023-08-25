const express = require('express'); 
var router = express.Router(); 
const branchController = require('../controllers/branch'); 


router.route('/')
    .get(branchController.getBranch)
    .post(branchController.createBranch);


router.route('/:id')
    .get(branchController.getBranch)
    .patch(branchController.updateBranch)
    .delete(branchController.deleteBranch);

module.exports = router; 