/*
~~  STYLISH CSS  ~~
Style your HTML from previous example with some Stylus middleware. Your solution must listen on the port number supplied
 by process.argv[2]. The path containing the HTML and Stylus files is provided in process.argv[3] (they are in the same
directory).
*/
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.use(require('stylus').middleware(process.argv[3]||path.join(__dirname, 'public')));
app.listen(process.argv[2]);