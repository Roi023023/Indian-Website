const User = require('../models/user'); // Import the User model

const getAllUsers = async () => {
    return User.find();
};

const deleteUser = async (userId) => {
    return User.findByIdAndDelete(userId);
};

module.exports = {
    getAllUsers,
    deleteUser
};
