const express=require("express");
const router=express.Router();
const wrapAsync=require("../utils/WrapAsync");
const User=require("../models/user.js");
const passport=require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController=require("../controllers/user.js");
 
//renderSignupForm route
router.route("/signup")
  .get(userController.renderSignupForm)
  //signup route
  .post(wrapAsync( userController.signup));


//render login form route
router.route("/login")
   .get(userController.renderLoginForm)
   //login route
   .post(saveRedirectUrl, passport.authenticate("local",{failureRedirect:"login",failureFlash:true}),userController.login
  );

//log out route
router.get("/logout",userController.logout);

module.exports=router;