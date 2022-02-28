const mongoose = require("mongoose")


const bookschema = new mongoose.Schema({
     userId:String,
     name:String,
     author:String,
     sinopsis:String,
     date:{
         type:date,
         dafault:Date.now
     }
});


const Book = mongoose.model("book", bookSchema);



module.exports = Book