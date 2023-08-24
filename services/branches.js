const Branch = require('../models/branch');

const getBranches = async() => {
    const branches = await Branch.find({});
    return branches;
}

module.exports = {
    getBranches
}