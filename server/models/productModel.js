const mongoose  = require("mongoose");
const productSchema = new mongoose.Schema({
      firstName:{
        type: String,       
      },
      lastName:{
        type: String,
      },
      email:{
         type: String
      },
      address:{
        type: String
      },
      phone:{
         type: Number
      }
},{
    timestamps: true
})

module.exports = mongoose.model("Products", productSchema)