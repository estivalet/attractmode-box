// project dependencies
var express = require('express');
var cookieParser = require('cookie-parser');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// routes
var box = require('./app/routes/box.routes'); 

// express framework setting ejs as view engine
var app = express();
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// set up middlewares for express
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', box);

// set up http server
var server = http.createServer(app);
server.listen(8081);
server.timeout = 0;
   
module.exports = app;