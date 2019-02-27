var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	let username = req.cookies.username;
	let obj = {type: 'get', value: 'CORS', position: 'Users', username};
    res.send(JSON.stringify(obj));
});

module.exports = router;