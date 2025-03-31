
const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");

module.exports.createReview=async(req,res)=>{
  
    let listing=await Listing.findById(req.params.id);
     let newReview=new Review(req.body.review);
      
     newReview.author=req.user._id;
   
  
     listing.reviews.push(newReview);
  
     await newReview.save();
     await listing.save();
  
  //flash message for success partial
  req.flash("success","successfully created a new review");
  
     res.redirect(`/listings/${listing._id}`);
  }


 //delete review
 module.exports.deleteReview=async(req,res)=>{
   let{id,reviewId}=req.params;
   await Listing.findByIdAndUpdate(id, {$pull:{reviews:reviewId}});
   await Review.findByIdAndDelete(reviewId);
 //flash message for success partial
 req.flash("success","successfully deleted a  review");
 
 
   res.redirect(`/listings/${id}`);
 
 
 }  
