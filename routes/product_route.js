const router= require("express").Router();
const productControler = require('../controlers/product_controler')


router.get('/',productControler.getProduct)
router.get('/:id',productControler.getProductById)



module.exports=router;
