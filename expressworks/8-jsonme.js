/*
~~  JSON ME  ~~
Write a server that reads a file (file name is passed in process.argv[3]), parses it to JSON and outputs the content to
the user with res.json(object). Everything should match to the 'books' resource.
*/
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(req, res) {
	fs.readFile(process.argv[3], function(err, data) {
		if (err) return res.send(500);
		try {
			res.send(JSON.parse(data));
		} catch(e) {
			res.send(500);
		}
	});
});
app.listen(process.argv[2]);