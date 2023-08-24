// Import the module responsible for handling branch-related data
const branchService = require('../services/branches');

// Define the function to handle the route for the homepage
const index = async (req, res) => {
    // Asynchronously fetch branches using the branchService module
    const branches = await branchService.getBranches();

    // Log the fetched branches to the console for debugging purposes
    console.log(branches);

    // Render the EJS template for the homepage and pass the fetched branches data
    res.render('../views/HomePage.ejs', { branches });
};

// Export the defined index function to be used as the route handler
module.exports = {
    index
};
