const jwt = require("jsonwebtoken");


const headerValidation = async function (req,res,next){
    const auth= req.headers["x-auth-header"];
    if(!auth) return res.send({status: false, msg : "error ,token is missing"});
    const result = jwt.verify(auth,'functionUp-technetium');
    // if(!result) return res.send({status: false, msg : "Invalid token"});
    next();
}
module.exports.headerValidation=headerValidation;