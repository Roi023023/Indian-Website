// loginController.js
const User = require('../models/user');

exports.getLoginPage = (req, res) => {
    res.render('Login_page'); // Render the login form
};

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username, password });

    if (!user) {
        return res.status(401).render('Login_page', { error: 'Invalid username or password' });
    }

    // Set session or token to indicate successful login
    req.session.user = user; // Assuming you're using sessions
   
   // Redirect the user back to the previous page or the home page
   const returnTo = req.session.returnTo || '/';
   delete req.session.returnTo;
   res.redirect(returnTo);
};
