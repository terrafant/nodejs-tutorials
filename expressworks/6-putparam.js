/*
~~  PARAM PAM PAM  ~~
Create an Express.js server that processes PUT '/message/:id' requests, e.g., PUT '/message/526aa677a8ceb64569c9d4fb'

As the response of this request return id SHA1 hashed with a date:
  require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
*/
var express = require('express');
var app = express();

app.put('/message/:id', function(req, res) {
	var hashedResponse = require('crypto')
							.createHash('sha1')
							.update(new Date().toDateString() + req.params['id'])
							.digest('hex');
	res.end(hashedResponse);
});
app.listen(process.argv[2]);