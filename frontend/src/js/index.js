console.log('hello world');

//var rx = require('rx');

/*
var io = require('socket.io-client');
var socket = io('http://localhost:3001');
socket.on('news', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
*/


var SocketRxClient = require('./socket-rx-client');

var socket = new SocketRxClient({
  url: 'http://localhost:3001'
})

socket.createObservable('news')
  .subscribe(function(data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });

  });


