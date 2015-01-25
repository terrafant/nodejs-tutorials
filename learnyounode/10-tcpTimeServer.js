/*
TIME SERVER
Write a TCP time server!
Your server should listen to TCP connections on the port provided by the first argument to your program. For each 
connection you must write the current date & 24 hour time in the format:
    "YYYY-MM-DD hh:mm"
followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:
    "2013-07-06 17:42"
To create the date, you'll need to create a custom format from a new Date() object. The methods that will be useful are:
    date.getFullYear()
    date.getMonth()     // starts at 0
    date.getDate()      // returns the day of month
    date.getHours()
    date.getMinutes()
Or, if you want to be adventurous, use the strftime package from npm. The strftime(fmt, date) function takes date format
s just like the unix date command. You can read more about strftime at: 
[https://github.com/samsonjs/strftime](https://github.com/samsonjs/strftime)
*/
var net = require('net');
var moment = require('moment');
var server = net.createServer(function (socket) {
	socket.write(moment().format('YYYY-MM-DD hh:mm'));
	socket.end();
});
server.listen(process.argv[2]);