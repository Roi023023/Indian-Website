// User services
const User = require('../models/user'); // Import the User model

const getAllUsers = async () => {
    return await User.find();
};

const deleteUser = async (userId) => {
    return await User.findByIdAndDelete(userId);
};

module.exports = {
    getAllUsers,
    deleteUser
};
