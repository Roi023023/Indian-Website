const express = require('express'); //express נרצה לעבוד עם
var router = express.Router(); // תביא לי ראוטר
const supplierController = require('../controllers/suppliers'); // controller שיצרנו עבור "ארטיקלס

// post & get ניסיון להסביר 
// post = בשביל לשנות נתונים או עשיתי משהו חדש
// get = לקבל בלי לעשות שינויים

// כל מי שיפנה אליי ל"סלייש", בבקשת "גט" / "פוסט"
//Router for getting Suppliers and for Creating suppliers
router.route('/')
    .get(supplierController.getSupplier) //Get suppliers array
    .post(supplierController.createSupplier);//Create supplier

    //מוצר ספציפי -  כל מי שיפנה אליי דרך "אידי", בבקשת "גט" / "פוסט
//Router for getting or updating Supplier details or deleting the supplier 
    router.route('/:id')
    .get(supplierController.getSupplier) //Get a single supplier's detailes
    .patch(supplierController.updateSupplier) // patch - אני רוצה לשנות שדות של משהו קיים
    .delete(supplierController.deleteSupplier); // Delete a single supplier


module.exports = router; // נייחצן אותו החוצה כי "אפפ. ג'י אס" צריך אותו