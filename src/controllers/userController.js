const UserModel= require("../models/userModel")
const jwt = require("jsonwebtoken");



const createUser= async function (req, res) {
    try {let data= req.body
    let savedData= await UserModel.create(data)
    res.status(201).send({msg: savedData})}
    catch(error){
      res.status(400).send({error : "An error occurred while creating the user's data."})
    }
}

const userlogin= async function (req, res) {
    try{const userName = req.body.emailId;
    const password = req.body.password;
    const user = await UserModel.findOne({emailId : userName, password : password}) // object or null
    if(!user){
        return res.status(401).send({status : false, msg : "username or the password is not correct"})
    }
    const token = jwt.sign({userId : user._id.toString()}, 'functionUp-tech');
    // console.log(token);
    res.setHeader("x-auth-header",token)
    // console.log(res.header["x-auth-header"]);
    res.status(201).send({status : true, data:{token:token}});}
    catch(error){
      res.status(500).send({error : "user login failed"})
    }
}

const getUser= async function (req, res) {
    try {const userId = req.params.userId;
    const userdetail= await UserModel.findById(userId);
    res.status(201).send({status : true, data: {userdetail}});}
    catch(error){
      res.status(404).send({msg : "An error occurred while retrieving user's data."})
    }
}
const updateUser= async function (req, res) {
    try{const userId = req.params.userId;
    const data= req.body;
    const userdetail= await UserModel.findById(userId);
    if(!userdetail) return res.status(404).send({msg :"User not found"})
    const updatedUser= await UserModel.findOneAndUpdate({_id:userId},data,{new : true})
    res.status(201).send({updatedUser})}
    catch(error){
      res.status(500).send({error : "Can not update user's data"})
    }
}

const deleteUser= async function (req, res) {
    try{const userId = req.params.userId;
    const userdetail= await UserModel.findById(userId);
    if(!userdetail) return res.status(404).send({msg :"User not found"})
    const updatedUser= await UserModel.findOneAndUpdate({_id:userId},{$set :{isDeleted : true}},{new : true})
    res.status(201).send({updatedUser})}
    catch(error){
      res.status(500).send({error : "Can not delete user's data"})
    }
}
module.exports.createUser= createUser
module.exports.userlogin= userlogin
module.exports.getUser= getUser
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser

