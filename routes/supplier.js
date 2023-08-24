const express = require('express'); //express נרצה לעבוד עם
var router = express.Router(); // תביא לי ראוטר
const supplierController = require('../controllers/suppliers'); // controller שיצרנו עבור "ארטיקלס

// post & get ניסיון להסביר 
// post = בשביל לשנות נתונים או עשיתי משהו חדש
// get = לקבל בלי לעשות שינויים

// כל מי שיפנה אליי ל"סלייש", בבקשת "גט" / "פוסט"
router.route('/')
    .get(supplierController.getSupplier)
    .post(supplierController.createSupplier);

//מוצר ספציפי -  כל מי שיפנה אליי דרך "אידי", בבקשת "גט" / "פוסט
router.route('/:id')
    .get(supplierController.getSupplier)
    .patch(supplierController.updateSupplier) // patch - אני רוצה לשנות שדות של משהו קיים
    .delete(supplierController.deleteSupplier);

module.exports = router; // נייחצן אותו החוצה כי "אפפ. ג'י אס" צריך אותו