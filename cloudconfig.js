const multer = require("multer");
const cloudinary=require("cloudinary").v2;
const {CloudinaryStorage}=require("multer-storage-cloudinary");


// Configure Cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
});


// Define storage using CloudinaryStorage
const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"wonderlust",
        allowedFormats:["png","jpg","jpeg"],
    },
});

module.exports={cloudinary,storage};