// get post js 

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res){

	if(req.method == 'GET'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream('./public/form.html', 'UTF-8').pipe(res);
		
	}else{
		var data = "";
		req.on("data", function(chunk){
			data += chunk;
		});
		req.on("end", function(){
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(`${data}`);
		});
	}
});
server.listen(5000);
