require('dotenv').config()

const mongoose =require("mongoose");
const express=require("express");
const app=express();
const uri="mongodb://localhost:27017/IPD1"
// const uri="mongodb+srv://jainams6160:jainam@cluster0.dkkkbkt.mongodb.net/?retryWrites=true&w=majority"
mongoose.set("strictQuery", false);

mongoose.connect(uri).then(() => {
    console.log("Connection successfull with Databse");
}).catch((e) => {
    console.log(e);
})
