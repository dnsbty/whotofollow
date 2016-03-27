var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema({
	username: String,
	name: String,
	network: { type: mongoose.Schema.Types.ObjectId, ref: 'Network' },
	upvotes: Number,
	slug: String
});
 
mongoose.model('Account', AccountSchema);
