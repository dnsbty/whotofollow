var mongoose = require('mongoose');

var NetworkSchema = new mongoose.Schema({
	name: String,
	urlprefix: String,
	slug: String
});
 
mongoose.model('Network', NetworkSchema);
