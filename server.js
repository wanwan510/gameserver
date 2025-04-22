/*var http = require('http');
http.createServer(function(request, response){
	response.write("Hello World!");
	response.end(); //close connection
}).listen(80); //http port

console.log('Now, listening on port 8080');*/
var express = require("express");
var server = express();

server.use(express.static(__dirname+"/public"));

/*server.get("/",function(req,res){ //web root
 	res.send("Hello, World!"); //回傳固定內容
 });
 server.get("game",function(req,res){ //other pages
 	res.send("req/md");
 });*/
 server.listen(80);


