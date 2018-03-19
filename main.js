/* just some sample test in node js */
var http = require("http");
http.createServer( function (request, response ){
	
	//content type : text/plain
	response.writeHead( 200, {'content-type': 'text/plain'});
	
	//send the response body 
	response.end("Hello World. This should be in the browser.. \n");
	
}).listen(8081);

//Console will print the message
console.log("Server running at ");