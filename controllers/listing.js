const Listing=require("../models/listing.js");

//index route
module.exports.index= async(req,res)=>{
    const allListings=await Listing.find({});
    res.render("./listings/index.ejs",{allListings});
    };

 //edit route   
    module.exports.renderEditForm=async(req,res)=>{
        let{id}=req.params;
        const listing=await Listing.findById(id);
    
        let originalUrl=listing.image.url;
        originalUrl=originalUrl.replace("/upload","/upload/h_220,w_200,e_blur:00");

      

        res.render("./listings/edit.ejs",{listing,originalUrl});
    };
    
 //update route   
    module.exports.updateListing=async(req,res)=>{
    console.log(req.file);


        if(!req.body.Listing){
           throw new ExpressError(400,"send valid data for listing");
        }
         let{id}=req.params;
        let listing= await Listing.findByIdAndUpdate(id,{...req.body.Listing});
     
      if(typeof req.file !=="undefined"){
       let url=req.file.path;
       let filename=req.file.filename;
       
       listing.image={url,filename};
       await listing.save();
      };

         //flash message for success partial
         req.flash("success","successfully updated a  listing");
     
         res.redirect(`/listings/${id}`);
     }

//delete route
     module.exports.destroyListing=async(req,res)=>{
         let{id}=req.params;
         let deletedData=await Listing.findByIdAndDelete(id);
         console.log(deletedData);
     //flash message for success partial
     req.flash("success","successfully deleted a listing");
     
         res.redirect("/listings");
     }


 //new route    
     module.exports.renderNewForm=(req,res)=>{

        res.render("./listings/new.ejs");
    }

    //create route
    module.exports.createListing=async(req,res,next)=>{
        //let {title,description,image,price,country,location}=req.body;
       
        // if(!req.body.listing){
        //     throw new ExpressError(400,"send valid data for listing");
        //  }
    
    const newListing=new Listing(req.body.listing);
       let url=req.file.path;
       let filename=req.file.filename;

       //new listing ke owner me owner ka name dena padega id ke form me
      newListing.owner=req.user._id;
    
     newListing.image={url,filename};

        await newListing.save();
     //flash message for success partial
        req.flash("success","successfully created a new listing");
    
        res.redirect("/listings");
       
    
    };

//show route
module.exports.showListing=async(req,res)=>{
   let {id}=req.params;
   const listing=await Listing.findById(id).populate({
     path:"reviews",
     populate:{path:"author"},
    })
    .populate("owner");  //populate is used to get the reviews of the listing
   
   //flash message for failure partial
if(!listing){
    req.flash("error","listing you requested for does not exist");
    res.redirect("/listings");
}
console.log('fuddu');
console.log(listing);
   res.render("./listings/show.ejs",{listing});
}