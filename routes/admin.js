const express = require('express');
const adminController = require('../controllers/admin'); // Referencing the 'admin.js' controller file
const {
    index,
    createProductsForm,
    manageProductsForm,
    createBranchForm,
    manageBranchForm,
    createSupplierForm,
    manageSupplierForm,
    createUsersForm,
    manageUsersForm,
    createAdminsForm,
    manageAdminsForm,
  } = require("../controllers/admin");

const { requireAdminLogin } = require("../middlewares/login");
const { createAdmin, getAdmins, deleteAdmin } = require("../controllers/admin");

const router = express.Router();

router.route('/').get(adminController.getAdminPage); // Defining the route for the admin page

router.get("/", requireAdminLogin('/admin'), index);

router.get("/createProductsForm", requireAdminLogin('/admin'), createProductForm);
router.get("/manageProductsForm", requireAdminLogin('/admin'), manageProductForm);
router.get("/createBranchForm", requireAdminLogin('/admin'), createBranchForm);
router.get("/manageBranchForm", requireAdminLogin('/admin'), manageBranchForm);
router.get("/createSupplierForm", requireAdminLogin('/admin'), createSupplierForm);
router.get("/manageSupplierForm", requireAdminLogin('/admin'), manageSupplierForm);
router.get("/createUsersForm", requireAdminLogin('/admin'), createUsersForm);
router.get("/manageUsersForm", requireAdminLogin('/admin'), manageUsersForm);
router.get("/createAdminForm", requireAdminLogin('/admin'), createAdminsForm);
router.get("/manageAdminsForm", requireAdminLogin('/admin'), manageAdminsForm);

router.route("/api").post(createAdmin).get(getAdmins);
router.route("/api/:id").delete(deleteAdmin);

module.exports = router;

