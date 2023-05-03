const BookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let book = req.body
    if (book.author) {
        if (book.publisher) {
            let authId = await authorModel.findById(book.author);
            let pubId = await publisherModel.findById(book.publisher);
            if (authId) {
                if (pubId) {
                    let result = await BookModel.create(book);
                    res.send(result);
                } else {
                    res.send("Publisher is not present")
                }
            } else {
                res.send("Author is not present");
            }
        } else {
            res.send("Publisher Id is required");
        }
    } else {
        res.send("Author Id is required")
    }
} 

const getBook= async function (req, res) {
    let authors = await BookModel.find().populate('author').populate('publisher')
    res.send({data: authors})
}

// function getUserWithPosts(username){
//     return User.findOne({ username: username })
//       .populate('posts').exec((err, posts) => {
//         console.log("Populated User " + posts);
//       })
//   }

const updateBook = async function (req,res){
    let pname=await publisherModel.findOne({name:{$in:['Penguin','HarperCollins']}}).select({_id:1})
   
    let books = await BookModel.updateMany({publisher:pname._id},{$set:{isHardCover: false }},{new:true})
    // console.log(books)
    let aname=await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    
    let updateprice=await BookModel.updateMany(
        {author : aname},
        {$inc :{price : 10}},{new:true})
    // console.log(updateprice)
    res.send({msg : {books, updateprice}})
    
}

module.exports.createBook= createBook
module.exports.getBook= getBook
module.exports.updateBook= updateBook