console.log('hello world');

var SocketRxClient = require('./socket-rx-client');

var socket = new SocketRxClient({
  url: 'http://localhost:3001'
})

socket.createObservable('news')
  .subscribe(function(data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });



