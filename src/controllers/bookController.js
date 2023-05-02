const { count } = require("console")
const BookModel= require("../models/bookModel.js")
const AuthorModel = require("../models/authorModel.js")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await AuthorModel.find( {author_name  :"Chetan Bhagat" } )
    let authorId = allBooks.map(val=>val.author_id);
    let result= await BookModel.find({author_id : authorId})
    res.send({msg : result});
    // if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    // else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
 
    let allBooks= await BookModel.findOneAndUpdate( 
        { name: "Two states"} , //condition
        { $set: {price : 100} }, //update in data
        { new: true , upsert: true} // new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     let authorId= allBooks.author_id;
     let authorName= await AuthorModel.find({author_id : {$eq : authorId}}).select({author_name:1,_id:0})
     authorName.push({"updated_Price":allBooks.price});  
     console.log(authorName);
     
     res.send( { msg: allBooks})
}

const priceOfBook= async function (req, res) {
    

    let savedData= await BookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})
    let authorId = savedData.map(val=>val.author_id);
    let result= await AuthorModel.find({author_id : authorId}).select({author_name:1,_id:0});
    console.log(result);
    res.send({msg: result})

// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

}



const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.createAuthor = createAuthor
module.exports.priceOfBook=priceOfBook