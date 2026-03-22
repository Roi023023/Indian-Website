const userService = require('../services/users'); // Import the user service

exports.getUserPage = (req, res) => {
    const userId = req.session.user;

    if (!userId) {
        return res.redirect('/login');
    }

    res.render('userPage', { userId }, {
        // dont show register button
        showRegister: false 
    })
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.render('admin/users', { users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        await userService.deleteUser(userId);
        res.redirect('/admin/users');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Error deleting user');
    }
};

module.exports = {
    getUserPage,
    getAllUsers,
    deleteUser
};
