var express = require('express');
var app = express();
app.get("/",function(req,res){
	var reply={
		ipaddress: req.header('x-forwarded-for') || req.connection.remoteAddress,
		launguage: req.headers["accept-language"].split(",")[0],
		software: req.headers['user-agent'].split("(")[1].split(")")[0]
	}
	console.log(req.header('x-forwarded-for') || req.connection.remoteAddress);
	res.json(reply);
}).listen(3000);