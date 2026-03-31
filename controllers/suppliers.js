const supplierSerivce = require('../services/suppliers');

const createSupplier = async (req, res) => {
    const newSupplier = await supplierSerivce.createSupplier(req.body.name, req.body.location, req.body.phone_number, req.body.Collaboration_Date);
    res.redirect('/admin/');
};

const getSuppliers = async (req, res) => {
    try {
        const suppliers = await supplierSerivce.getSuppliers();
        res.render('admin/allSuppliers', { suppliers });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

const getSupplier = async (req, res) => {
    const supplier = await supplierSerivce.getSupplierById(req.params.id);
    if (!supplier) {
        return res.status(404).json({ errors: ['Supplier not found'] });
    }
    res.redirect('/admin/suppliers');
};

const updateSupplier = async (req, res) => {  
    const supplier = await supplierSerivce.updateSupplier(req.params.id, req.body.name, req.body.location, req.body.phone_number, req.body.Collaboration_Date);
    if (!supplier) {
      return res.status(404).json({ errors: ['Supplier not found'] });
    }
    res.redirect('/admin/suppliers');
  };

  const deleteSupplier = async (req, res) => {
    const supplier = await supplierSerivce.deleteSupplier(req.params.id);
    if (!supplier) {
      return res.status(404).json({ errors: ['Supplier not found'] });
    }
  
    res.redirect('/admin/suppliers');
  };

  module.exports = {
    createSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
    deleteSupplier
  };