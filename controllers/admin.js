//admin controller
//const branchService = require('../services/branches'); [not used for now]

const Admin = require('../models/admin');

const getLoginPage = (req, res) => {
    res.render('Admin_Login');
};

const login = async (req, res) => {

    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });

    if (!admin) {
        return res.redirect('/admin/login');
    }

    const valid = await admin.comparePassword(password);

    if (!valid) {
        return res.redirect('/admin/login');
    }

    req.session.admin = admin._id;

    res.redirect('/admin');
};

const getAdminPage = async (req, res) => {
    res.render('Admin_Page');
};

module.exports = {
    getLoginPage,
    login,
    getAdminPage
};