var mongoose = require('mongoose');

//DB connection
mongoose.connect('mongodb://localhost/DMIT');

// Schema

var Schema =  mongoose.Schema;

var quantitySchema = new Schema({
    quantity: Number,
    quantityCow: Number,
    date: { type: String, unique: true }
});

// Model in DB
var quantity = mongoose.model('quantity', quantitySchema);

// Save data into DB

// var firstData = new quantity({quantity: 1.5, date: "02-06-2017"});
//
// firstData.save(function (err) {
//     if(err){
//         return err;
//     }
//     else {
//         console.log("Data save Successfully");
//     }
// });

module.exports = quantity;