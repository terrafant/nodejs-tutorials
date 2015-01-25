/*
HTTP COLLECT
Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect 
all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of characters received from the server and 
the second line should contain the complete String of characters sent by the server.
  <http://npm.im/bl>
  <http://npm.im/concat-stream>
*/
var http = require('http');
var str = '';
addInfo = function(info) {
		str += info;
	};
http.get(process.argv[2], function callback(data) {
	data.setEncoding('utf-8');
		
	data.on('data', addInfo);
	data.on('end', function print(end) {
		console.log(str.length);
		console.log(str)
		});
});
