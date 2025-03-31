
if(process.env.NODE_ENV !="production"){
require("dotenv").config();
}

const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride = require('method-override');

const session=require("express-session");
const mongoStore = require("connect-mongo");

const flash=require("connect-flash");
const passport=require("passport");
const LocalStrategy=require("passport-local");

const Listing = require("./models/listing.js");
const Review = require("./models/reviews.js");
const User=require("./models/user.js");

const listingsRouter=require("./ROUTES/listing.js");
const reviewsRouter=require("./ROUTES/review.js");
const userRouter=require("./ROUTES/user.js");

const WrapAsync=require("./utils/WrapAsync.js");
const ExpressError=require("./utils/expressError.js");
const ejsMate=require("ejs-mate");


//set up EJS and views
app.engine("ejs",ejsMate);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//middleware
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,"/public")))



let dbUrl=process.env.ATLASDB_URL;
//connecting t0 DB
async function main(){
    await mongoose.connect(dbUrl)
}

main().then((res)=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})


//Connect to MongoDB with connect-mongo
const store= mongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET, //sesetive data ko crpto me likhate hai.
    },
    touchAfter:24*3600, //mtlb 24 hours tk log in rhega uske baad session expire ho jayeva.
});

store.on("error",()=>{
    console.log("error in mongo session store",error);//mongo store me error aayega ,uske liye
})

//express-sesions,// Connect to MongoDB
const sessionOptions={
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,

    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
    
};
app.use(session(sessionOptions));
app.use(flash());

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash Messages and Current User Middleware
app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currentUser=req.user;
    next(); 
})

// Routes
// app.get("/",(req,res)=>{
//     res.send("HI I am vikku");
// })
 
// Test Route for User Registration
app.get("/registerUser",async(req,res)=>{
    let fakeUser=new User({
        email:"vikku@gmail.com",
        username:"vikku",
    });

  let newUser=await User.register(fakeUser,"hello123");
    res.send(newUser)
})

// Use Routers
app.use("/listings",listingsRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);


// Catch-All Route for Undefined Routes
app.all("*",(req,res,next)=>{
    next (new ExpressError(404,"page nt found"));
});

// Error Handling Middleware
app.use((err,req,res,next) =>{
    let{statusCode=500,message="something went wrong"}=err; 
    //res.status(statusCode).send(message);
    res.status(statusCode).render("./listings/error.ejs",{errMsg:message});
      
//    res.send("something went wrong");
});

// Start the Server
app.listen(3000,()=>{
    console.log("server is listening on port 3000");
});