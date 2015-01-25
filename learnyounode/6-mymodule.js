var fs = require('fs');
var path = require('path');
var countLines = function (dirPath, extension, callback) {
	fs.readdir(dirPath, function count(err, data) {
		if(err) return callback(err);
		var files = [];
		data.forEach(function(item) {
			if (path.extname(item) === '.' + extension) {
				files.push(item);
			}
		});
		callback(null, files);
	});
}
module.exports = countLines;