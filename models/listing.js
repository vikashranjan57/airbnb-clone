
const mongoose = require("mongoose");
const Review=require("./reviews.js");
const User=require("./user.js");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,

    },
    image: {
        url:String,
        fillename:String,
     },
    price: {
        type: Number,
        required:true,

    },
    location: {
        type: String,

    },
    country: {
        type: String,

    },
   
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Review",
        }
 ],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
});

//delete middleware for reviews
listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews}});
    }
});


const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;