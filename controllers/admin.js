
const branchService = require('../services/branches');

const getAdminPage =async (req,res) => {

    res.render('Admin_Page');
}

module.exports = {
    getAdminPage
}