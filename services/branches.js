const Branch = require('../models/branch');

const createBranch = async (city, country, established) => {
    const branch = new Branch({
        city : city,
        country : country,
        established : established,
    });
    return await branch.save(); 
};


const getBranchById = async (id) => {
    return await Branch.findById(id);
};


const getBranches = async () => {
    return await Branch.find({}); 
};


const updateBranch = async (city, country, established) => {
    const branch = await getBranchById(id);
    if (!branch) 
        return null;
    
    branch.city = city;
    branch.country = country;
    branch.established = established;
    
    await branch.save(); 
    return branch;
};


const deleteBranch = async (id) => {
    const branch = await getBranchById(id);
    if (!branch)
        return null;

    await branch.remove();
    return branch;
};


module.exports = {
    createBranch,
    getBranchById,
    getBranches,
    updateBranch,
    deleteBranch
}