var express = require('express');

var server = express();

//var router = express.Router();

/* GET home page. */
server.get('/', function(req, res) {
    res.send('This web page parses a query after the / ');
	console.log(req.query);
});

//module.exports = router;

server.listen(3000);