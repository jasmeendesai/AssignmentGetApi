const mongoose = require('mongoose');

const newBookSchema= new mongoose.Schema({
    name:String,
    author:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"newAuthor"
    },
    price:Number,
    ratings:Number,
    publisher:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:"newPublisher"
    },
    isHardCover : {
        type : Boolean,
        default : false
    }
})
module.exports = mongoose.model("newBook", newBookSchema);
