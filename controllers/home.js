const branchService = require('../services/branches');

const index =async (req,res) => {
    
    const branches = await branchService.getBranches();
    console.log(branches);
    res.render('../views/HomePage.ejs', {branches});
}

module.exports = {
    index
}