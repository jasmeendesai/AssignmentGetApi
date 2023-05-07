const headerValidation = async function(req,res,next){
    const isFreeAppUser = req.headers.isfreeappuser;  // false
    const body = req.body;

    if (isFreeAppUser){
        if(isFreeAppUser=="true"){
            body.isFreeAppUser = true;
        }else{
            body.isFreeAppUser = false;
        }
        next();
    }else{
        res.send({msg : "the request is missing a mandatory header."});
    }
}

module.exports.headerValidation = headerValidation;