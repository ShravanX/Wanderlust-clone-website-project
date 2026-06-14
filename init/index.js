const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_url = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() =>{
    console.log("connected to DB");
})
.catch(err => {
    console.log(err);
});

async function main(){
    await mongoose.connect(mongo_url);
};


const initDB = async () => {
    await Listing.deleteMany({}); // Clears existing data
    initData.data = initData.data.map((obj) => ({...obj, owner: "68c969740cd4448d89c7bdd4"})); // Assigns an owner ID
    await Listing.insertMany(initData.data); // Inserts new data
    console.log("data was initialize"); // Logs completion
};

initDB();