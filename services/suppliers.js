const Supplier = require('../models/suppliers');

const createSupplier = async (name, location, phone_number, Collaboration_Date) => {
    const supplier = new Supplier({
        name : name,
        location : location,
        phone_number : phone_number,
        Collaboration_Date : Collaboration_Date
    });

    // if (Collaboration_Date)
        // supplier.Collaboration_Date = Collaboration_Date;

    return await supplier.save(); 
};


const getSupplierById = async (id) => {
    return await Supplier.findById(id);
};


const getSuppliers = async () => {
    return await Supplier.find({}); 
};


const updateSupplier = async (id, name, location, phone_number, Collaboration_Date) => {
    const supplier = await getSupplierById(id);
    if (!supplier) 
        return null;

    supplier.name = name; 
    supplier.location = location;
    supplier.phone_number = phone_number;
    supplier.Collaboration_Date = Collaboration_Date;
    
    await supplier.save(); 
    return supplier;
};


const deleteSupplier = async (id) => {
    const supplier = await getSupplierById(id);
    if (!supplier)
        return null;

    await supplier.remove();
    return supplier;
};


module.exports = {
    createSupplier,
    getSupplierById,
    getSuppliers,
    updateSupplier,
    deleteSupplier
}