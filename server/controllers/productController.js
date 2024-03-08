const productModel = require("../models/productModel");


const addProduct = async(req,res)=>{
    try {
        const newitem = new productModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body. email,
            address: req.body. address,
            phone: req.body.phone,
        })
        const newdata = await newitem.save();
        return res.status(200).json({
            msg: "Product Added",
            data: newdata
        })
    } catch (error) {
        return res.status(401).json({
            msg: "Server error",
            
        })
    }
}

const getProduct = async(req,res)=>{
    try {
        const getdata = await productModel.find();
        return res.status(200).json({
            total: getdata.length,
            productdata : getdata
        })
    } catch (error) {
        return res.status(401).json({
            msg: "Server error",
            
        })
    }
}

const singleProduct = async(req,res)=>{
   try {
       const single = await productModel.findById(req.params.id)
       return res.status(200).json({
        msg: "Product Found",
        product: single
        
    })
   } catch (error) {
    return res.status(401).json({
        msg: "Server error",
        
    })
   }
}


const deleteProduct  = async(req,res)=>{
   try {
      const delproduct = await productModel.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        msg: "Product Deleted",
        product: delproduct
        
    })
   } catch (error) {
    return res.status(401).json({
        msg: "Server error",
        
    })
   }
}

const updateProduct = async(req,res)=>{
    try {
        const updated = await productModel.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        return res.status(200).json({
            msg: "User List Added",
            data: updated
        })
    } catch (error) {
        return res.status(401).json({
            msg: "Server error",
            
        })
    }
}

module.exports = {addProduct, getProduct,deleteProduct,singleProduct,updateProduct}