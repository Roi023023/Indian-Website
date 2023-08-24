const supplierSerivce = require('../services/suppliers');

const createSupplier = async (req, res) => {
    const newSupplier = await supplierSerivce.createSupplier(req.body.name);
    res.json(newSupplier);
};

const getSuppliers = async (req, res) => {
    const suppliers = await supplierSerivce.getSuppliers();
    res.json(suppliers);
};

const getSupplier = async (req, res) => {
    const article = await supplierSerivce.getSupplierById(req.params.id);
    if (!article) {
        return res.status(404).json({ errors: ['Supplier not found'] });
    }
    res.json(article);
};

const updateSupplier = async (req, res) => {
    if (!req.body.name) {
      res.status(400).json({
        message: "name is required",
      });
    }
  
    const supplier = await supplierSerivce.updateSupplier(req.params.id, req.body.name);
    if (!supplier) {
      return res.status(404).json({ errors: ['Supplier not found'] });
    }
  
    res.json(supplier);
  };

  const deleteSupplier = async (req, res) => {
    const supplier = await supplierSerivce.deleteSupplier(req.params.id);
    if (!supplier) {
      return res.status(404).json({ errors: ['Supplier not found'] });
    }
  
    res.send();
  };

  module.exports = {
    createSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier
  };