const User=require("../models/user.js");
const Listing=require("../models/listing.js");
const Review=require("../models/reviews.js");



//1.signup get route
module.exports.renderSignupForm=(req,res)=>{
    res.render("./users/signup.ejs");
}

//2.signup post route
module.exports.signup=async(req,res)=>{
   try{
    let{username,email,password}=req.body;
    const newUser=new User({email,username});

    const registeredUser=await User.register(newUser,password);
    console.log(registeredUser);

    //implemention of automatic login when anyone signup
    req.login(registeredUser,(err)=>{
        if(err){
            next(err);
        }

        req.flash("success","welcome to wonderlust");
        res.redirect("/listings");
    });


   }catch(e){
      req.flash("error",e.message);
      res.redirect("/signup");
   }
   
}

//render login form
module.exports.renderLoginForm=(req,res)=>{
    res.render("./users/login.ejs");  
}

//login
module.exports.login=(req,res)=>{
    req.flash("success","welcome back to wondelust");

    res.redirect(res.locals.redirectUrl || "/listings" );
   

}

//logout
module.exports.logout=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
   
    req.flash("success","you are logged out");
    res.redirect("/listings");
   });
}