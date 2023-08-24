//Mongoose Schema and Model for "Branch"

// Import Mongoose and Schema class
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a Mongoose schema for "Branch" entity
const BranchSchema = new Schema({
    lat: {
        type: String,
        isRequired: true
    },
    long: {
        type: String,
        isRequired: true
    }
});

// Export "Branch" model using the schema, specifying collection name as "branches"
module.exports = mongoose.model('Branch', BranchSchema, "branches");

/*
This code defines a Mongoose schema and model for the "Branch" entity. 
It imports Mongoose and the Schema class.

The BranchSchema defines the structure of a "Branch" document 
in the MongoDB database,
 containing "lat" and "long" properties. 
 
 The code exports a Mongoose model named "Branch" using the schema 
 and specifies that the corresponding MongoDB collection 
 should be named "branches".
 */