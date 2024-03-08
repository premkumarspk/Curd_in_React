const { addProduct, getProduct, deleteProduct, singleProduct, updateProduct } = require("../controllers/productController");

const Router = require("express").Router();

Router.post("/addproducts",addProduct)
Router.get("/getproducts",getProduct)
Router.delete("/delete/:id", deleteProduct)
Router.get("/single/:id", singleProduct)
Router.put("/update/:id", updateProduct)
module.exports = Router;