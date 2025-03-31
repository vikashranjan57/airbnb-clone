const express=require("express");
const router=express.Router({mergeParams:true});
 
const WrapAsync=require("../utils/WrapAsync.js");
const ExpressError=require("../utils/expressError.js");
const {listingSchema}=require("../schema.js");

const Listing = require("../models/listing.js");
const Review = require("../models/reviews.js");
const{validateReview, isLoggedIn,isReviewAuthor}=require("../middleware.js");

const reviewController=require("../controllers/review.js");

//reviews post route
router.post("/",isLoggedIn,validateReview, WrapAsync(reviewController.createReview));

//delete  route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, WrapAsync(reviewController.deleteReview));

module.exports=router;