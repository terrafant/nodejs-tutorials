/*
MY FIRST I/O!
Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines it 
contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.
*/
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
var splittedBuffer = buffer.toString().split('\n');
console.log(splittedBuffer.length - 1);