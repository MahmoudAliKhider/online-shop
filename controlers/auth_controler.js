const authModel = require("../models/auth_model");

exports.getSignup = (req, res, next) => {
    res.render("signup");
};

exports.postSignup = (req, res, next) => {
    authModel
    .createNewUser(req.body.username, req.body.email, req.body.password)
    .then(() => res.redirect("/login"))
    .catch(err => {
        console.log(err)
        res.redirect("/signup");
    });
};

exports.getLogin = (req, res, next) => {
  res.render("login");
};
