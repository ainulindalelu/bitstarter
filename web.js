var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(300);
  var fs = require('fs');
  fs.readFile('index.html', function(err, buf) {
    if (err) throw err;
    // console.log(buf);
    var str = buf.toString('utf-8');
    response.send(str);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
