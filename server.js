// creating Web Server using HTTP 

var http = require('http');
var fs = require('fs');
var path = require('path');

/* http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello ......');
	res.end();
}).listen(3000); */


http.createServer((req, res) => {
	
	if(req.url === '/'){
		fs.readFile("./public/index.html", (err, html) => {
			res.writeHead(200, {'Content-Type': 'text/html'});
			//res.write('helllo this is from server' + req.url);
			res.end(html);
		});
	}else if(req.url.match("\.css$")){
		var cssPath = path.join(__dirname, 'public', req.url);
		var fileStream = fs.createReadStream(cssPath, "UTF-8");
		res.writeHead(200, {'Content-Type': 'text/css'});
		fileStream.pipe(res);
	}else if(req.url.match("\.png$")){
		var imgPath = path.join(__dirname, 'public', req.url);
		var fileStream = fs.createReadStream(imgPath);
		res.writeHead(200, {'Content-Type' : 'image/png'});
		fileStream.pipe(res);
	}else{
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end("Page Not Found");
	}
	
}).listen(5000);