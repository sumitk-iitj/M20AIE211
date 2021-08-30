var express = require("express");
var app     = express();
var path    = require("path");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});



app.listen(2000);
console.log("sever is running on 2000")
