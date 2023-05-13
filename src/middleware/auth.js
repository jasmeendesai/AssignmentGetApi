
const jwt = require("jsonwebtoken");


const headerValidation = async function (req,res,next){
    try{const auth= req.headers["x-auth-header"]; 
    if(!auth) return res.status(400).send({status: false, msg : "error ,token is missing"});

    jwt.verify(auth,'functionUp-tech')
    // (error,auth) => {
    //     if(!auth) return res.status(401).send({ status: false, msg: "token is invalid" });
    // });
    next();}
    catch(error){
        res.status(401).send({ status: false, msg: "token is invalid" });
    }
}

const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
   let token = req.headers["x-auth-header"];
    let decodedToken=jwt.verify(token, "functionUp-tech")
    let userToBeModified = req.params.userId
      let userLoggedIn =decodedToken.userId
      if(userToBeModified != userLoggedIn) return res.status(403).send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    next()
}
module.exports.headerValidation=headerValidation;
module.exports.authorise=authorise
