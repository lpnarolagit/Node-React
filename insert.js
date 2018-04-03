// insert update operations

var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

http.createServer( function( req, res ){
	
	if( req.url === '/form' ){
		res.writeHead(200, {"content-type": "text/html"});
		fs.createReadStream('./public/form.html', 'UTF-8').pipe(res);
	
	}
	
	if( req.method === 'POST' ){
		var data = '';
		req.on("data", function(chunk){
			data += chunk;
		});
		req.on("end", function(chunk){
			
			MongoClient.connect(url, function(err, db){
				if (err) throw err;
				var dbo = db.db("emp");
				var vals = qs.parse(data);
				dbo.collection('empinfo').insertOne(vals, function(err, res){
					if(err) throw err;
					console.log("1 Record inserted success");
					db.close();
				});
			});
		});
	}
	
	// read frist record
	if( req.url === '/getfirst' ){
		MongoClient.connect(url, function(err, db){
			if(err) throw err;
			var dbo = db.db("emp");
			dbo.collection("empinfo").findOne({}, function(err, result){
				if(err) throw err;
				res.writeHead(200, {"Content-type": "text/html"});
				//res.end(JSON.stringify(result.firstname));
				res.end(JSON.stringify(result));
				// res.end(JSON.parse(result));
				db.close();
			});
		});
	}
	
	// read all records
	if( req.url === '/getall' ){
		MongoClient.connect(url, function(err, db){
			if(err) throw err;
			var dbo = db.db("emp");
			dbo.collection("empinfo").find({/*firstname: "Viral"*/},{ _id: false }).toArray(function(err, result){
				if(err) throw err;
				res.writeHead(200, {"content-type": "text/html"});
				res.end(JSON.stringify(result));
				console.log(result);
				db.close();
			});
		});
	}
	
	if( req.url === '/update' ){
		MongoClient.connect(url, function(err, db){
			if(err) throw err;
			var updata = {firstname: "Manoj"};
			var replacedata = { $set:{ firstname: "Shambhu", lastname: "Chauhan", age: 32}};
			var dbo = db.db("emp");
			dbo.collection("empinfo").updateOne(updata, replacedata, function(err, result){
				if(err) throw err;
				console.log("1 Record updated");
			});
			db.close();
		});
	}
	if( req.url === '/delete' ){
		MongoClient.connect(url, function(err, db){
			if(err) throw err;
			var deldata = {firstname: "Shambhu"};
			//var replacedata = { $set:{ firstname: "Shambhu", lastname: "Chauhan", age: 32}};
			var dbo = db.db("emp");
			dbo.collection("empinfo").deleteOne(deldata, function(err, result){
				if(err) throw err;
				console.log("1 Record deleted");
			});
			db.close();
		});
	}
	
}).listen(5000);