/*
HTTP CLIENT
Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the
 String contents of each "data" event from the response to a new line on the console (stdout).
*/
var http = require('http');

http.get(process.argv[2], function callback(response) {
	response.setEncoding('utf-8')
	response.on('data', function(data) {
		console.log(data);
	});
});