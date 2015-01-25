/*
~~  STATIC  ~~
Apply static middleware to serve index.html file without any routes. Your solution must listen on the port number 
supplied by process.argv[2]. The index.html file is provided and usable via process.argv[3] value of the path to it.
*/
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.listen(process.argv[2]);