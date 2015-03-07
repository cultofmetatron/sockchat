console.log('hello world');

var rx = require('rx');
var io = require('socket.io-client/socket.io.js');

var socket = io('http://localhost:3001');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});




