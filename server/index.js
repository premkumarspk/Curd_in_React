const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")
const dotenv = require("dotenv");
const prodctRoute = require("./routers/productRouter")
dotenv.config()

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("Db connected..");
}).catch(()=>{
    console.log("DB error");
})

app.use(cors());
app.use(express.json());
app.use("/api", prodctRoute)

app.listen(8000, ()=>{
    console.log("Server is running on port 8000...");
})