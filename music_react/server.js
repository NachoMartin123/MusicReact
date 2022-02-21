var express = require('express');
var path = require('path');
var fs = require('fs');
//var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', function (req,res){
    res.sendFile(path.join(__dirname, "public/index.html"));
});

