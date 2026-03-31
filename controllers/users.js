//controllers/users.js
const userService = require('../services/users'); // Import the user service

const getUserPage = (req, res) => {
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
        res.render('admin/allUsers', { users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Error fetching users');
    }
};

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;

        //prevent self deletion
        if (req.session.userId === userId) {
            return res.status(400).send("You can't delete yourself");
        }

        await userService.deleteUser(userId);
        res.redirect('/admin/all');
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
