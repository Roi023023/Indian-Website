const getCheckoutPage =async (req,res) => {

    res.render('checkout', {
        // dont show register button
        showRegister: false 
    })
};

module.exports = {
    getCheckoutPage
}