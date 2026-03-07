// logout controller
exports.logout = (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            console.log(err);
            return res.redirect('/');
        }

        res.clearCookie('connect.sid'); // destroys the session
        res.redirect('/login');
    });

};