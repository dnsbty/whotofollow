var express = require('express');
var router = express.Router();

/* GET networks listing. */
router.get('/', function(req, res, next) {
	res.send('this will be a list of networks');
});

module.exports = router;
