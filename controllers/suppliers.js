const supplierSerivce = require('../services/suppliers');

const createSupplier = async (req, res) => {
    const newSupplier = await supplierSerivce.createSupplier(req.body.name, req.body.location, req.body.phone_number, req.body.Collaboration_Date);
    res.json(newSupplier);
};

const getSuppliers = async (req, res) => {
    const suppliers = await supplierSerivce.getSuppliers();
    res.json(suppliers);
};

const getSupplier = async (req, res) => {
    const supplier = await supplierSerivce.getSupplierById(req.params.id);
    if (!supplier) {
        return res.status(404).json({ errors: ['Supplier not found'] });
    }
    res.json(supplier);
};

const updateSupplier = async (req, res) => {  
    const supplier = await supplierSerivce.updateSupplier(req.params.id, req.body.name, req.body.location, req.body.phone_number, req.body.Collaboration_Date);
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