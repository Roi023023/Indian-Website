const userService = require('../services/users'); // Import the user service

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
    getAllUsers,
    deleteUser
};
