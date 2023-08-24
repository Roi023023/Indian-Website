const express = require('express'); //express נרצה לעבוד עם
var router = express.Router(); // תביא לי ראוטר
const productController = require('../controllers/products'); // controller שיצרנו עבור "ארטיקלס

// post & get ניסיון להסביר 
// post = בשביל לשנות נתונים או עשיתי משהו חדש
// get = לקבל בלי לעשות שינויים

// כל מי שיפנה אליי ל"סלייש", בבקשת "גט" / "פוסט"
//Router for getting Suppliers and for Creating suppliers
router.route('/')
    .get(productController.getProduct) //Get products array
    .post(productController.createProduct);//Create product

    //מוצר ספציפי -  כל מי שיפנה אליי דרך "אידי", בבקשת "גט" / "פוסט
//Router for getting or updating Product details or deleting the product 
    router.route('/:id')
    .get(supplierController.getProduct) //Get a single product's detailes
    .patch(supplierController.updateProduct) // patch - אני רוצה לשנות שדות של משהו קיים
    .delete(supplierController.deleteProduct); // Delete a single product


module.exports = router; // נייחצן אותו החוצה כי "אפפ. ג'י אס" צריך אותו