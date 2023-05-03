// const authorModel = require("../models/authorModel")
const publisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let book = req.body
    let bookCreated = await publisherModel.create(book)
    res.send({data: bookCreated})
}

const getPublisherData= async function (req, res) {
    let books = await publisherModel.find()
    res.send({data: books})
}

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await publisherModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

module.exports.createPublisher= createPublisher
module.exports.getPublisherData= getPublisherData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
