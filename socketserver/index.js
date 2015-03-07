var fs = require('fs');

var handler = function(req, res, next) {
  res.end("active/n");

}

var app = require('http').createServer(handler)
var io = require('socket.io')(app);



io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log('grrr');
    console.log(data);
  });
});

process.on('error', function(err) {
  console.log(err);
})


app.listen(3001)
