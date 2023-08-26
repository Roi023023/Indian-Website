const Supplier = require('../models/suppliers');
const supplier = require('../models/supplier');
const globals = require('../models/globals'); //added model

const createSupplier = async (name, location, phone_number, Collaboration_Date) => {
    //added start
    globals.supCount++;

    let Collaboration_length;

    const year = globals.getYearFromDate(Collaboration_Date);
    Collaboration_length = 2023 - year;
    //added finish
   
    const supplier = new Supplier({
        name : name,
        location : location,
        phone_number : phone_number,
        Collaboration_Date : Collaboration_Date,
        Collaboration_length:Collaboration_length
    });

    return await supplier.save(); 
};


const getSupplierById = async (id) => {
    return await Supplier.findById(id);
};

//added start
const getSupplierNameById = async (id) => {
    supID = getSupplierById(id);
    return await supID.name;
};
//added finish


const getSuppliers = async () => {
    return await Supplier.find({}); 
};


const updateSupplier = async (id, name, location, phone_number, Collaboration_Date) => {
    const supplier = await getSupplierById(id);
    if (!supplier) 
        return null;

    // Find the index of the old name in the names array
    const oldNameIndex = globalFunctions.names.indexOf(supplier.name);

    // If the old name is found, update it with the new name
    if (oldNameIndex !== -1) {
        globalFunctions.names.splice(oldNameIndex, 1, name);
    }

    supplier.name = name;
    supplier.location = location;
    supplier.phone_number = phone_number;
    supplier.Collaboration_Date = Collaboration_Date;

    // Update the Collaboration_length
    let Collaboration_length;
    const year = globals.getYearFromDate(supplier.Collaboration_Date);
    Collaboration_length = 2023 - year;
    globals.numbers[oldNameIndex] = Collaboration_Date;

    await supplier.save(); 
    return supplier;
};



const deleteSupplier = async (id) => {
    //added start
    globals.supCount--;

    const searchString = globals.getSupplierNameById(id); // The string you want to find
    let foundIndex = -1; // Initialize with a value that indicates not found

    for (const [index, name] of globalFunctions.names.entries()) {
        if (name === searchString) {
            foundIndex = index;
            break; // Stop the loop once found
        }
    }

    if (foundIndex !== -1) {
        //console.log(`Found at index ${foundIndex}`);
        const newArray = [
            ...globalFunctions.names.slice(0, foundIndex), // Elements before the found index
            ...globalFunctions.names.slice(foundIndex + 1), // Elements after the found index
            "sup" // Add "sup" at the end
        ];
    
        globalFunctions.names = newArray; // Update the names array
        console.log(globalFunctions.names); // Updated names array
    } else {
        console.log(`Not found`);
    }



    //added finish
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