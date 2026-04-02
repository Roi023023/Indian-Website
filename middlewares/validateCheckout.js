const validateCheckout = (req, res, next) => {
    const { holder, cardNumber, exp, cvv } = req.body;

    if (!holder || !cardNumber || !exp || !cvv) {
        return res.status(400).send("All fields are required");
    }

    if (cardNumber.length < 16) {
        return res.status(400).send("Invalid card number");
    }

    if (cvv.length !== 3) {
        return res.status(400).send("Invalid CVV");
    }

    next(); 
};

module.exports = { validateCheckout };