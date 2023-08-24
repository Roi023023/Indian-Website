// Import the module responsible for handling supplier-related data
const supplierService = require('../services/suppliers');

// Define a function to create a new supplier
// Activates when address ends with / 
const createSupplier = async (req, res) => {
    const newSupplier = await supplierService.createSupplier(req.body.name);
    res.json(newSupplier);
};

// Define a function to get all suppliers
// activates if address ends with / 
const getSuppliers = async (req, res) => {
    const suppliers = await supplierService.getSuppliers();
    res.json(suppliers);
};

// Define a function to get a specific supplier by ID
// Activates if address ends with /:id
const getSupplier = async (req, res) => {
    const article = await supplierService.getSupplierById(req.params.id);
    if (!article) {
        return res.status(404).json({ errors: ['Supplier not found'] });
    }
    res.json(article);
};

// Define a function to update a supplier's information
// Activates if adress ends with /:id
const updateSupplier = async (req, res) => {
    if (!req.body.name) {
        res.status(400).json({ message: "Name is required" });
    }
    const supplier = await supplierService.updateSupplier(req.params.id, req.body.name);
    if (!supplier) {
        return res.status(404).json({ errors: ['Supplier not found'] });
    }
    res.json(supplier);
};

// Define a function to delete a supplier
// Activates if adress ends with /:id
const deleteSupplier = async (req, res) => {
    const supplier = await supplierService.deleteSupplier(req.params.id);
    if (!supplier) {
        return res.status(404).json({ errors: ['Supplier not found'] });
    }
    res.send();
};

// Export all the defined controller functions
module.exports = {
    createSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier
};
