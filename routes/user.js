const express = require("express");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router({});
const User = require("../models/user.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");

const userController = require("../controllers/user.js");

router.get("/signup", userController.renderSignupForm);


//Signup route
router.post("/signup", wrapAsync(userController.signup));


//login route
router.get("/login", userController.renderLoginForm);

router.post("/login", saveRedirectUrl, passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), userController.login);


// GET /logout
router.get("/logout", userController.logout);

module.exports = router;



// app.get("/demouser", async (req, res) => {
//   let fakeuser = new User({
//     email: "student@gmail.com",
//     username: "qwerty"
//   });

//   let newUser = await User.register(fakeuser, "hellworld");
//   res.send(newUser);
// });