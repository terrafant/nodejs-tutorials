/*
HTTP UPPERCASERER
Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and 
returns it to the client.

Your server should listen on the port provided by the first argument to your program.
through2-map allows you to create a transform stream using only a single function that takes a chunk of data and returns
 a chunk of data. It's designed to work much like Array#map() but for streams
*/
var http = require('http');
var map = require('through2-map');

var server = http.createServer(function (req, res) {
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
});
server.listen(process.argv[2]);