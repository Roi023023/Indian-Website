//adminAuth

const Admin = require('../models/admin');

async function requireAdmin(req, res, next) {

    if (!req.session?.admin) {
        return res.redirect('/login');
    }

    //Check if admin is in DB (If someone manually edits cookies or sessions, this prevents fake access)
    const admin = await Admin.findById(req.session.admin);

    if (!admin) {
        req.session.admin = null;
        return res.redirect('/login');
    }

    //exposes admin to layout views just like user 
    res.locals.user = {
        username: admin.username,
        role: 'admin'
    };

    next();
}

module.exports = requireAdmin;