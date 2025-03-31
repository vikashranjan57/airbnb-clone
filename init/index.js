const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing =require("../models/listing.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wonderlust")
}

main().then((res)=>{
    console.log("connected to DB");
})
.catch((err)=>{
    console.log(err);
})


//initialization ka ek function likhenge
const initDB=async ()=>{
    await Listing.deleteMany({});
    //add new properties(owner) in the database
    initData.data= initData.data.map((obj)=>({...obj,owner:'67e09b5d23ac8264df5eab02'}));
    await Listing.insertMany(initData.data); 
    console.log("data was initialized");
};


initDB();
