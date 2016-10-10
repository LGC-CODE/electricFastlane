var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var info = mongoose.model('infoModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', number: '510-999-9999' });
});

router.get('/hide', function(req, res, next) {
  res.render('hidden');
});

router.post('/saveInfo', function(req, res, next){
	var model = new info();

	model.email = req.body.email;
	model.name = req.body.name;
	model.phone = req.body.phone;
	model.message = req.body.message;

	model.save(function(err){
		if(err){ return next(err); }
		res.status(200).json({ message: 'Email Sent' });
	});
});

router.get('/admin', function(req, res){
	info.find(function(err, contact){
		
		if(err){ return next(err); }

		res.json(contact);

	});
});

module.exports = router;
