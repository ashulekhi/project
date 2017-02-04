var mongoose = require('mongoose');

var schema = mongoose.Schema;

var pdfSchema = new schema({
	url : String,
	filename: String
});


var pdfModel = mongoose.model('pdf' , pdfSchema);

module.exports = pdfModel ; 