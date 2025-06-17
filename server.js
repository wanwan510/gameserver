// var http = require('http');
// http.createServer(function(request, response){
// 	response.write("Hello World!");
// 	response.end(); //close connection
// }).listen(80); //http port
var express = require("express");
var server = express();

var bodyParser = require("body-parser");


// Serve static files from the "public" directory
server.use(express.static(__dirname + "/public"));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

//npm install nedb-promises
const Datastore = require('nedb-promises')
let GameDB = Datastore.create(__dirname + '/game.db')

// server.get("/", function (req, res) { //web root
//     res.send("Hello, World!"); //回傳固定內容
// });
/*server.get("/score", function (req, res) { //other pages
   //url?user=md&score=1000
   console.log(req.query);
   res.send("req /md");
});*/

//Endpoint to get the top 3 rankings based on timing
server.post("/rank", (req, res) => {
   GameDB.find({}, { _id: 0 }).sort({ "timing": -1 }).limit(3).then((docs) => {
      if (docs != null) {
         res.send(docs);
      }
   })
})

//Endpoint to post timing data
server.post("/postscore", (req, res) => {
   console.log(req.body);
   //save to db(database)
   GameDB.insert(req.body).then(doc => {
      //find and sort top 3 
      GameDB.find({}, { _id: 0 }).sort({ "timing": -1 }).limit(3).then((docs) => {
         if (docs != null) {
            res.send(docs);
         }
      })
   });

   // res.send([{name:"MD", rank:1},{name:"Jhon",rank:2}]);
});

// Start the server on port 80
server.listen(80, () => {
   console.log("Server is running on port 80");
});

//step1>node server.js
//step2>http://localhost:80/
//
