const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const bookList= async function (req, res) {
    
    let allBooks= await BookModel.find().select( { authorName : 1 ,  bookName : 1 , _id : 0} )
    res.send({msg: allBooks})
}

const getBooksInYear = async function (req, res) {
    let data1 = req.body
    let allBooks= await BookModel.find({year:{$eq:data1.year}})
    res.send({msg: allBooks})
}
// }
const getParticularBooks = async function (req, res) {
    let data2 = req.body
   
    let allBooks= await BookModel.find(data2)
    res.json({msg: allBooks})
}


// }
const getXINRBooks= async function (req, res) {
    let allBooks= await BookModel.find({$or:[{"prices.indianPrice":"100INR"},{"prices.indianPrice":"200INR"},{"prices.indianPrice":"500INR"}]});
    res.json({msg: allBooks})
}
// {$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
const getRandomBooks= async function (req, res) {
    let allBooks= await BookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]});
    res.json({msg: allBooks})
}
module.exports.createBook = createBook
module.exports.bookList =bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks