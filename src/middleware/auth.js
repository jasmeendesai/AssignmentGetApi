
const jwt = require("jsonwebtoken");


const headerValidation = async function (req,res,next){
    const auth= req.headers["x-auth-header"];
    if(!auth) return res.send({status: false, msg : "error ,token is missing"});
    jwt.verify(auth,'functionUp-technetium', (error,auth) => {
        if(!auth) return res.send({ status: false, msg: "token is invalid" });
    });
    next();
}



const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-auth-header"];
    let decodedToken=jwt.verify(token, "functionUp-technetium")
    let userToBeModified = req.params.userId
      let userLoggedIn =decodedToken.userId
      if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
    next()
}
module.exports.headerValidation=headerValidation;
module.exports.authorise=authorise
