var mongoose = require('mongoose');

var contact_infoSchema = new mongoose.Schema({
	email: String,
	name: String,
	phone: String,
	message: String
});

mongoose.model('infoModel', contact_infoSchema);