var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
// var $ = require('jquery')

var port = 3000

app.get('/', function(req, res){
  // res.send('<h1>Hello World</h1>')
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
  console.log('a user connected')
  socket.on('chat message', function(msg){
    console.log('message', + msg)
  })
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
})

http.listen(port, function(){
  console.log('Lishning on port ' + port + '! Yep!')
})
