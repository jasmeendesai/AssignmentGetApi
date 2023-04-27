const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName : String,
     authorName : String,
     category : String,
     year : Number
})

module.exports = mongoose.model('Book', bookSchema) //users



// String, Number
// Boolean, Object/json, array