const productController = {
    productList: (req, res) => {
        res.render('lamps')
    },
    detail: (req,res) =>{
        res.render('products/detail')
    }

}

module.exports = productController;