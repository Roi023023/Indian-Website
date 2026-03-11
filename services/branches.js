// branches services 
const Branch = require('../models/branch');

const createBranch = async (city, country, established) => {
    const branch = new Branch({
        city,
        country,
        established,
    });
    return await branch.save(); 
};


const getBranchById = async (id) => {
    return await Branch.findById(id);
};


const getBranches = async () => {
    return await Branch.find({}); 
};


const updateBranch = async (id, city, country, established) => {
    const branch = await getBranchById(id);
    if (!branch) 
        return null;
    
    //prevents possible data overwrite 
    if (city !== undefined) branch.city = city;
    if (country !== undefined) branch.country = country;
    if (established !== undefined) branch.established = established;
    
    await branch.save(); 
    return branch;
};


const deleteBranch = async (id) => {
    const branch = await getBranchById(id);
    if (!branch)
        return null;

    await branch.deleteOne();
    return branch;
};


module.exports = {
    createBranch,
    getBranchById,
    getBranches,
    updateBranch,
    deleteBranch
}