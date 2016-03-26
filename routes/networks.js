var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Network = mongoose.model('Network');

/* GET networks listing. */
router.get('/', function(req, res, next) {
	Network.find({}, function(err, networks) {
		if (err)
			next(err);

		res.json(networks);
	});
});

module.exports = router;
