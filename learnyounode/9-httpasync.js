/*
JUGGLING ASYNC
This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time 
you will be provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You 
don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them 
out in the same order as the URLs are provided to you as command-line arguments.

Counting callbacks is one of the fundamental ways of managing async in Node. Rather than doing it yourself, you may find
 it more convenient to rely on a third-party library such as [async](http://npm.im/async) or [after](http://npm.im/after
). But for this exercise, try and do it without any external helper library.
*/
var http = require('http');
var count = 0;
var arData = [];
var urls = process.argv.slice(2);
for (var i = 0; i < urls.length; i++) {
	work(i);
}

function work(i) {
	http.get(urls[i], function callback(response) {
		response.setEncoding('utf-8');
		var localData = '';
		response.on('data', function dataCallback(data) {
			localData += data;
		});
		response.on('end', function endCallback(data) {
			arData[i] = localData;
			count ++;
			if (count === urls.length) {
				arData.forEach(function (item) {
					console.log(item);
				});
			}
		});
	});
}
