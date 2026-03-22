const branchService = require('../services/branches');

const index =async (req,res) => {
    
    const branches = await branchService.getBranches();
    res.render('../views/HomePage.ejs', {branches}, {
        // dont show register button
        showRegister: false 
    })
};

module.exports = {
    index
}