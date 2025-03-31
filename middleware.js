const Listing=require("./models/listing.js");
const ExpressError=require("./utils/expressError.js");
const {listingSchema,reviewSchema}=require("./schema.js");
const Review=require("./models/reviews.js");

  
module.exports.isLoggedIn=(req,res,next)=>{
  //when user logged in then after it add new listings
   if(!req.isAuthenticated()){
    //if not login then store original url in session
    req.session.redirectUrl=req.originalUrl;
     console.log(req.originalUrl);
    req.flash("error","You must be signed in first!");
     return res.redirect("/login");
   }

   next();
};


module.exports.saveRedirectUrl=(req,res,next)=>{
  if(req.session.redirectUrl){
    res.locals.redirectUrl=req.session.redirectUrl;
  
  }
  next();
};

module.exports.isOwner=async(req,res,next)=>{
  let{id}=req.params;
  let listing=await Listing.findById(id);
  if(!listing.owner._id.equals(res.locals.currentUser._id)){
      req.flash("error","you dont have permission to change");
      return res.redirect(`/listings/${id}`)
  }
  next();
};



//for server side validation for listings
//i create a method to validate the listing
//if the listing is not valid then i will throw an error
//if the listing is valid then i will call next
//this method will be called before the create route
module.exports.validateListing=(req,res,next)=>{
  let{error}=listingSchema.validate(req.body);
  if(error){
      let errMsg=error.details.map((el)=>el.message).join(",");
    throw new ExpressError(400,errMsg);
  }
  else{
      next();
  }
}


//for server side validation for reviews
//i create a method to validate the review
//if the review is not valid then i will throw an error
//if the review is valid then i will call next
//this method will be called before the create route
module.exports.validateReview=(req,res,next)=>{
  let{error}=reviewSchema.validate(req.body);
  if(error){
      let errMsg=error.details.map((el)=>el.message).join(",");
      throw new ExpressError(400,errMsg);
  }
  else{
      next();
  }
}



module.exports.isReviewAuthor=async(req,res,next)=>{
  let{id,reviewId}=req.params;
  let review=await Review.findById(reviewId);
  if(!review.author .equals(res.locals.currentUser._id)){
      req.flash("error","you are not author of this reviews");
      return res.redirect(`/listings/${id}`);
  }
   
  next();
};