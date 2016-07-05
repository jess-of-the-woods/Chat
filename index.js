var app = require('express')();
var http = require('http').Server(app);

var port = 3000;

app.get('/', function(req, res){
  // res.send('<h1>Hello World</h1>')
  res.sendFile(__dirname + '/index.html');
})

http.listen(port, function(){
  console.log('listening on port ' + port + '! Yep!');
});
