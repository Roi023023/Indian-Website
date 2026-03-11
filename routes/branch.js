// branch routes
const express = require('express');
const branchController = require('../controllers/branch');
const adminAuth = require('../middlewares/adminAuth');

const router = express.Router();

router.use(adminAuth);

router.route('/')
    .get(branchController.getBranches)
    .post(branchController.createBranch);

router.route('/:id')
    .get(branchController.getBranchById)
    .patch(branchController.updateBranch)
    .delete(branchController.deleteBranch);

module.exports = router;