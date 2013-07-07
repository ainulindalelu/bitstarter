var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(90);
  fs.readFile('index.html', function(err, buf)) {
    if (err) throw err;
    console.log(buf);
    var json = JSON.stringify(buf);
    response.send(json);
  }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
