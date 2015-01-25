/*
HTTP FILE SERVER
Write an HTTP server that serves the same text file for each request it receives.

Your server should listen on the port provided by the first argument to your program.

You will be provided with the location of the file to serve as the second command-line argument. You must use the 
fs.createReadStream() method to stream the file contents to the response.

The fs core module also has some streaming APIs for files. You will need to use the fs.createReadStream() method to 
create a stream representing the file you are given as a command-line argument. The method returns a stream object which 
you can use src.pipe(dst) to pipe the data from the src stream to the dst stream. In this way you can connect a 
filesystem stream with an HTTP response stream.
*/
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	fs.createReadStream(process.argv[3]).pipe(res);
	
});
server.listen(process.argv[2]);