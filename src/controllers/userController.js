const UserModel= require("../models/userModel")
const jwt = require("jsonwebtoken");



const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const userlogin= async function (req, res) {
    const userName = req.body.emailId;
    const password = req.body.password;
    const user = await UserModel.findOne({emailId : userName, password : password})
    if(!user){
        return res.send({status : false, msg : "username or the password is not correct"})
    }
    const token = jwt.sign({userId : user._id.toString()}, 'functionUp-technetium');
    // console.log(token);
    res.setHeader("x-auth-header",token)
    // console.log(res.header["x-auth-header"]);
    res.send({status : true, data:{token:token}});
}

const getUser= async function (req, res) {
    const userId = req.params.userId;
    const userdetail= await UserModel.findById(userId);
    res.send({status : true, data: {userdetail}});
}
const updateUser= async function (req, res) {
    const userId = req.params.userId;
    const data= req.body;
    const userdetail= await UserModel.findById(userId);
    if(!userdetail) return res.send({msg :"User not found"})

    const updatedUser= await UserModel.findOneAndUpdate({_id:userId},data,{new : true})
    
    res.send({updatedUser})
}

const deleteUser= async function (req, res) {
    const userId = req.params.userId;
 
    const userdetail= await UserModel.findById(userId);
    if(!userdetail) return res.send({msg :"User not found"})

    const updatedUser= await UserModel.findOneAndUpdate({_id:userId},{$set :{isDeleted : true}},{new : true})
    
    res.send({updatedUser})
}
module.exports.createUser= createUser
module.exports.userlogin= userlogin
module.exports.getUser= getUser
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser

