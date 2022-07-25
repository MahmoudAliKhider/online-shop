const productsModel = require('../models/products_model')

exports.getProduct=(req,res,next)=>{

    productsModel.getFirstProduct().then(product=>{
        res.render('product',{
            product:product
        })
    })
}

exports.getProductById= (req , res , next)=>{
    //get id
    
    let id = req.params.id
    //get pro
    productsModel.getAllProductesById(id).then((product)=>{

        res.render('product',{
            product:product
        })
    })
}