var http = require('http');
var fs = require('fs');

const port = 3001;
hostname = '127.0.0.1';


fs.readFile('main.html', function(err,html) {
	if(err){
		throw err;
	}
	var server = http.createServer(function(req,res)  {
		res.statusCode = 200;
		res.setHeader('Content-type', 'text/html');
		res.write(html); 
		res.end();
	});
	server.listen(port,hostname, function() {
		console.log('Server started on port '+port);
		
	});
});

