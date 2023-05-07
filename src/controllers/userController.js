const userModel= require("../models/userModel")

const createUser= async function (req, res) {
    let author = req.body
    // if(req.headers.isfreeappuser=="true"){
    //     author.isFreeAppUser = true;
    // }else{
    //     author.isFreeAppUser = false;
    // }
    let authorCreated = await userModel.create(author)
    res.send({data: authorCreated})
}

module.exports.createUser= createUser
