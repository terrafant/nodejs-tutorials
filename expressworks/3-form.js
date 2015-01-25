/*
~~  GOOD OLD FORM  ~~
Write a route ('/form') that processes HTML form input (<form><input name="str"/></form>) and prints backwards the str 
value.
*/
var express = require('express');
var app = express();
var bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));
app.get('/form', function(req, res) {
	res.end('<form method="post"><input name="str"/><input type="submit" /></form>');
});
app.post('/form', function(req, res) {
	res.end(req.body['str'].split('').reverse().join(''));
	
});
app.listen(process.argv[2]);