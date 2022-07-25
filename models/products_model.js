const mongoose = require('mongoose')

const DB_Url ='mongodb://0.0.0.0:27017/omline-shop' 

//model  لل  datat
const productSchema = mongoose.Schema({
    name:String,
    image:String,
    price: Number,
    description: String,
    category: String,
})
const Product = mongoose.model('product',productSchema)

exports.getAllProductes = () => {
 //connect to db
 //get products
 //disconnect
   return new Promise((resolve, reject) =>{
        mongoose.connect(DB_Url).then(() =>{
            return Product.find({})
        }).then(products => {              //دي هي 
            mongoose.disconnect()
            resolve(products)
        }).catch((err) =>{
            mongoose.disconnect()
            reject(err)
        })
    })
}
exports.getAllProductesByCategory = (category) => {
  
      return new Promise((resolve, reject) =>{
           mongoose.connect(DB_Url).then(() =>{
               return Product.find({category:category})
           }).then(products => {              //دي هي 
               mongoose.disconnect()
               resolve(products)
           }).catch((err) =>{
            mongoose.disconnect()
            reject(err)
        })
       })
   }

   exports.getAllProductesById = (id) => {
  
    return new Promise((resolve, reject) =>{
         mongoose.connect(DB_Url).then(() =>{
             return Product.findById(id)
         }).then(products => {              //دي هي 
             mongoose.disconnect()
             resolve(products)
         }).catch((err) =>{
            mongoose.disconnect()
            reject(err)
        })
     })
 }

 exports.getFirstProduct=()=>{
    return new Promise((resolve, reject) =>{
        mongoose.connect(DB_Url).then(() =>{

            //finfOne => id one 
            return Product.findOne({})
        }).then(products => {              //دي هي 
            mongoose.disconnect()
            resolve(products)
        }).catch((err) =>{
            mongoose.disconnect()
            reject(err)
        })
    })
 }