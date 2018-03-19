// Read json file

var http = require("http");
var emp = require('./public/data/emp.json');

var server = http.createServer(function (req, res){
	
	if(req.url === '/'){
		res.writeHead(200, {"Content-Type": "text/json" });
		res.end(JSON.stringify(emp));
	}else if(req.url === '/node.js'){
		var data = emp.filter(function(item){
			return item.lang === 'node.js';
		});
		res.writeHead(200, {'Content-Type':'text/json'});
		res.end(JSON.stringify(data));
	}else if(req.url === '/react.js'){
		var data = emp.filter(function(item){
			return item.lang === 'react.js';
		});
		res.writeHead(200, {'Content-Type':'text/json'});
		res.end(JSON.stringify(data));
	}else{
		res.writeHead(404, {'Content-type': 'text/html'});
		res.end('Page not found');
	}
	
});

server.listen(5000, function(){
	console.log("Listening at port 5000");
});