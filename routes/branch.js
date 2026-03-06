const express = require('express'); 
const branchController = require('../controllers/branch'); 
const requestAuth = require('../middlewares/adminAuth');

const router = express.Router();

router.use(adminAuth);

router.route('/')
    .get(branchController.getBranch)
    .post(branchController.createBranch);


router.route('/:id')
    .get(branchController.getBranch)
    .patch(branchController.updateBranch)
    .delete(branchController.deleteBranch);

module.exports = router; 