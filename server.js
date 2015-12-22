var express = require('express');
var path = require('path');
var http = require('http');
var fs = require('fs');
var bodyParser = require('body-parser');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var session      = require('express-session');


var app = express();


app.set('port', (process.env.PORT || 3000));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res){
    res.readFile('index.html');
});

app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
});


