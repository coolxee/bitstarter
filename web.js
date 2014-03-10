var express = require('express');
var app = express();
var fileName = "index.html"

var myBuf = fs.readFileSync(fileName)
var myStr = myBuf.toString()

app.use(express.logger());


app.get('/', function(request, response) {
  response.send(myStr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
