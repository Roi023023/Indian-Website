const index = (req,res) => {
    const product = {
        title: 'we made it!!'
    }
    res.render('../views/HomePage.ejs', {product});
}

module.exports = {
    index
}