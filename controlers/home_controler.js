const productsModel = require('../models/products_model')

//   not rebeted
let productsPromise  

// valid category =>  استخدمت دا عشان احطوا في الشرط
let validCategories =[ 'clothes', 'phones', 'tabl', 'computers','test']
exports.getHome = (req , res, next)=>{
    //get products db
    //render index.ejs

   

    //get category  // query  موجود فيها  category url
    let category = req.query.category
//  هنا بقلوا لو all products  category =>  not all =>   chose else  اعرض  all products


//  بقلوا لو ضاف  category  غلط متعملش  fuliter  لاي حاجة
    if(category && validCategories.includes(category))
    
     productsPromise=   productsModel.getAllProductesByCategory(category)
     .then(products => { 
        res.render('index',{ products:products})
    })
            
    else productsPromise = productsModel.getAllProductes()
    productsPromise.then(products => {
        
        res.render('index',{
            products:products
        
        })
    })     

}