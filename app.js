const express = require("express");
const app = express();
const path = require("path");

const homeRouter = require('./routes/home_route')
const productRouter = require('./routes/product_route')
const authRouter = require('./routes/auth_route')
// عشان اربط دا بالفولدير الي فيه html and ejs
// app.use(express.static(path.join(__dirname , 'views')))
app.use(express.static(path.join(__dirname , 'assets')))
app.use(express.static(path.join(__dirname , 'images')))



//temblet engien 
app.set('view engine' , 'ejs')
app.set('views','views') // defoult 


app.use('/',homeRouter)
app.use('/',authRouter)
app.use('/product',productRouter)


app.listen(3000 , ()=> {
    
    console.log("server listen on port 3000");
})