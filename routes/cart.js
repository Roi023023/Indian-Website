const express = require("express");
const cartController = require("../controllers/cart");
const requestAuth = require('../middlewares/requestAuth');

const router = express.Router();

router.use(requestAuth);

router.get("/", cartController.getCartPage);

router.post("/add/:productId", cartController.addToCart);

router.post("/remove/:productId", cartController.removeFromCart);

module.exports = router;
