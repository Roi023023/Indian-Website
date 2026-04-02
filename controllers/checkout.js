const getCheckoutPage =async (req,res) => {

    res.render('checkout', {
        // dont show register button
        showRegister: false 
    })
};

/*
const checkoutController = (req, res) => {
    // At this point, middleware guarantees req.body is valid
    const { holder, cardNumber, exp, cvv } = req.body;

    // Here you can do:
    // - Save the order to database
    // - Reduce product stock
    // - Clear cart
    // - Send confirmation email, etc.

    // For now, just confirm:
    res.send("Checkout successful!");
};
*/

module.exports = {
    getCheckoutPage
}