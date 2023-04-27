const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    // let data= req.body
    let savedData= await UserModel.create(req.body)
    res.send({msg: savedData})
}

const getBook= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBook= getBook