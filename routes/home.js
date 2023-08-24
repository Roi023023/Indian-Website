//Express Router Setup

// Import required dependencies
const express = require('express');
const HomeController = require('../controllers/home'); // Import controller for home route

// Create an instance of an Express router
const router = express.Router();

// Define a route for the root URL and associate it with the index function from HomeController
router.route('/').get(HomeController.index);

// Export the router to use in other parts of the application
module.exports = router;


/*This code sets up an Express router for handling routes in a web application.
 It imports the necessary dependencies, 
 including a controller for the home route.
  
 It creates a route for the root URL 
 and associates it with a controller function 
 named "index" from the HomeController.
 
 The router is then exported for use in other parts of the application.*/ 