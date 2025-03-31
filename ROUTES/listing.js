const express=require("express");
const router=express.Router();

const Listing = require("../models/listing.js");
const WrapAsync=require("../utils/WrapAsync.js");
const{isLoggedIn,isOwner,validateListing}=require("../middleware.js");
const listingController=require("../controllers/listing.js");

const multer=require("multer");
const {storage}=require("../cloudconfig.js");
const upload=multer({storage});

//edit route
router.get("/:id/edit", isLoggedIn,upload.single("Listing[image]"),WrapAsync( listingController.renderEditForm ));

//  /new route ,  /:id se phle rhega
//new route
router.get("/new",isLoggedIn,listingController.renderNewForm);


//updateroute
router.route("/:id")
  .put(isLoggedIn,isOwner,upload.single("Listing[image]"), WrapAsync(listingController.updateListing ))
  //delete route
  .delete(isLoggedIn, WrapAsync(listingController.destroyListing ))
  //show route
  .get( WrapAsync( listingController.showListing ));



  //index route//create route
  router.route("/")
  .get( WrapAsync(listingController.index))
    //create route
     .post(isLoggedIn,upload.single("listing[image]"), validateListing, WrapAsync(listingController.createListing))
  
   
   


module.exports=router;








