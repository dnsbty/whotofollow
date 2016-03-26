var express = require('express');
var router = express.Router();

/* GET accounts listing. */
router.get('/', function(req, res, next) {
	res.send('this will be a list of accounts');
});

/* POST new account */
router.post('/', function(req, res, next) {
	res.send('this will have saved a new user');
});

/* GET detailed account info */
router.get('/:account', function(req, res, next) {
	res.send('this will be details about the provided account');
});

/* POST upvote to an account */
router.post('/:account/upvotes', function(req, res, next) {
	res.send('this will have saved an upvote');
});

module.exports = router;
