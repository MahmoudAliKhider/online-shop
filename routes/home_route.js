const router= require("express").Router();

const homeControler = require("../controlers/home_controler");

router.get('/',homeControler.getHome);

module.exports=router;