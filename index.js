const express = require("express");
const fileRoutes = require("./routes/files");
const mongoose = require("mongoose");


const app = express();

app.use(express.urlencoded());

mongoose.connect("mongodb://localhost:27017/fileSharingApp")
.then(()=>console.log("file uplode in db"))
.catch((err)=>console.log("file is not uploded" , err));

app.use(fileRoutes);

app.listen( 6060 , ()=>console.log("server is start in 6060"));