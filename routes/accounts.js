var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Network = mongoose.model('Network');
var Account = mongoose.model('Account');

/* GET accounts listing. */
router.get('/:network/accounts/', function(req, res, next) {
	Account.find({ network: req.network }, function(err,accounts) {
		res.json(accounts);
	});
});

/* POST new account */
router.post('/:network/accounts/', function(req, res, next) {
	if (!req.body.username)
		return res.status(400).json({ message: 'No username was provided'});
	if (!req.body.name)
		return res.status(400).json({ message: 'No name was provided'});

	// make sure there is no duplicate account
	Account.findOne({
		slug: req.body.username.toLowerCase(),
		network: req.network
	}, function(err, foundAccount) {
		if (foundAccount)
			return res.status(409).json({ message: 'That account was already submitted'});

		var newAccount = new Account({
			username: req.body.username,
			name: req.body.name,
			slug: req.body.username.toLowerCase(),
			upvotes: 0,
			network: req.network
		});

		newAccount.save(function(err, account) {
			if (err)
				next(err);

			res.json(account);
		});
	});
});

/* GET detailed account info */
router.get('/:network/accounts/:account', function(req, res, next) {
	res.send('this will be details about the provided account');
});

/* POST upvote to an account */
router.post('/:network/accounts/:account/upvotes', function(req, res, next) {
	res.send('this will have saved an upvote');
});

/* Get network object when a network name is supplied */
router.param('network', function(req, res, next, networkName) {
	Network.findOne({ slug: networkName }, function (err, network){
		if (err)
			return next(err);

		if (!network)
			return next(new Error('That network isn\'t supported yet'));

		req.network = network;
		return next();
	});
});

module.exports = router;
