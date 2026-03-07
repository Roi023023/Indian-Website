// loginController - 
const User = require('../models/user');
const Admin = require('../models/admin');

exports.getLoginPage = (req, res) => {
    res.render('Login_page');
};

exports.loginUser = async (req, res) => {

    const { username, password } = req.body;

    // Try normal user
    const user = await User.findOne({ username });

    if (user) {
        // Check if password is in DB
        const valid = await user.comparePassword(password);

        if (!valid) {
            return res.status(401).render('Login_page', { error: 'Invalid username or password' });
        }

        req.session.user = user._id;

        const returnTo = req.session.returnTo || '/';
        delete req.session.returnTo;

        return res.redirect(returnTo);
    }

    // Try admin
    const admin = await Admin.findOne({ username });

    if (admin) {
        // Check if password is in DB
        const valid = await admin.comparePassword(password);

        if (!valid) {
            return res.status(401).render('Login_page', { error: 'Invalid username or password' });
        }

        req.session.admin = admin._id;

        return res.redirect('/admin');
    }

    return res.status(401).render('Login_page', { error: 'Invalid username or password' });
};
