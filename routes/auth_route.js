const router = require("express").Router();
const bodyParser = require("body-parser");

const authController = require('../controlers/auth_controler')
router.get("/signup",  authController.getSignup);

router.post(
    '/signup',
    bodyParser.urlencoded({ extended: true }),
    authController.postSignup
)

router.get("/login",  authController.getLogin);


module.exports = router;