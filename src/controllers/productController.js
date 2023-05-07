const productModel= require("../models/productModel")

const createProduct = async function(req,res){
    const data = req.body;
    const result= await productModel.create(data);
    res.send({msg : result});
}
module.exports.createProduct = createProduct;
