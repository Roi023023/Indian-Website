const adminService = require("../services/admin");

const index = (req, res) => {
    res.render("../views/admin.ejs");
  };

const createProductsForm = (req, res) => {
    res.render("../views/admin-forms/create-products-form.ejs");
  };

const manageProductsForm = (req, res) => {
    res.render("../views/admin-forms/manage-products-form.ejs");
  };

const createBranchesForm = (req, res) => {
    res.render("../views/admin-forms/create-branches-form.ejs");
  };

const manageBranchesForm = (req, res) => {
    res.render("../views/admin-forms/manage-branches-form.ejs");
  };

const createSuppliersForm = (req, res) => {
    res.render("../views/admin-forms/create-suppliers-form.ejs");
  };

const manageSuppliersForm = (req, res) => {
    res.render("../views/admin-forms/manage-suppliers-form.ejs");
  };

const createUsersForm = (req, res) => {
    res.render("../views/admin-forms/create-users-form.ejs");
  };

const manageUsersForm = (req, res) => {
    res.render("../views/admin-forms/manage-users-form.ejs");
  };

const createAdminsForm = (req, res) => {
    res.render("../views/admin-forms/create-admins-form.ejs");
  };

const manageAdminsForm = (req, res) => {
    res.render("../views/admin-forms/manage-admins-form.ejs");
  };

const getAdminPage =async (req,res) => {
    res.render('Admin_Page');
}

const createAdmin = async (req, res) => {
    try {
      const admin = await adminService.createAdmin(req.body);
      res.status(201).send(admin);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  const deleteAdmin = async (req, res) => {
    try {
      const admin = await adminService.deleteAdmin(req.params.id);
      res.status(201).send(admin);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  const getAdmin = async (req, res) => {
    try {
      const admin = await adminService.getAdmin(req.params.id);
      res.status(201).send(admin);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  const getAdmins = async (req, res) => {
    try {
      const admins = await adminService.getAdmins();
      res.status(201).send(admins);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  const updateAdmin = async (req, res) => {
      try {
          const admin = await adminService.updateAdmin(req.params.id, req.body);
          res.status(201).send(admin);
        } catch (error) {
          res.status(400).send(error);
        }
  }

module.exports = {
    index,
    createProductsForm,
    manageProductsForm,
    createBranchesForm,
    manageBranchesForm,
    createSuppliersForm,
    manageSuppliersForm,
    createUsersForm,
    manageUsersForm,
    createAdminsForm,
    manageAdminsForm,
    getAdminPage,
    createAdmin,
    getAdmin,
    getAdmins,
    updateAdmin,
    deleteAdmin
}