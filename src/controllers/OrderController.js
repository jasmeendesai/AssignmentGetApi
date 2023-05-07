const OrderModel= require("../models/OrderModel")
const userModel = require("../models/userModel")
const productModel= require("../models/productModel")

const createOrder = async function(req,res){
    const data = req.body;
    if(data.userId){
        if(data.productId){
            const user_Id = await userModel.findById(data.userId);
            const product_Id = await productModel.findById(data.productId);
            if(user_Id){
                if(product_Id){
                    if(data.isFreeAppUser){
                    // data.isFreeAppUser = true;
                    data.amount=0;
                    const result = await OrderModel.create(data);
                    res.send({msg : result});
                    }else{
                        const productPrice = product_Id.price;
                        const balance = user_Id.balance;
                        const userBal = productPrice-balance;
                        if(userBal>0){
                        let x = await userModel.findOneAndUpdate(
                            { _id: data.userId },
                            { $set: { balance: userBal } },
                            { new: true }
                          );
                        data.amount = productPrice;
                        // data.isFreeAppUser=false;
                        const result = await OrderModel.create(data);
                        res.send({msg : result})
                        }
                        else{
                            res.send("User does not have enough balance");
                        }
                    }
 
                }else{
                    res.send("Enter valid ProductId");
                }

            }else{
                res.send("Enter valid UserId");
            }
        }
        else{
            res.send("ProductId is required");
        }
    }else{
        res.send("UserId is required");
    }
}
module.exports.createOrder = createOrder;


