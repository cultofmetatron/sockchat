
var rx = require('rx');
var io = require('socket.io-client');
var _ = require('lodash');

var SocketRxClient = function(options) {
  if (!options.url) {
    throw new Error('SocketRxClient requires a url paramater!!');
  };
  this._url = options.url;
  this._socket = io(this._url);
};

//we memoize this so that we get a performance boost.
SocketRxClient.prototype.createObservable = _.memoize(function(event) {
  var self = this;
  return Rx.Observable.create(function(observer) {
    self._socket.on(event, function(data) {
      observer.onNext(data);
    });
  });
});

SocketRxClient.prototype.emit = function() {
  var args = Array.prototype.slice.call(arguments);
  this._socket.emit.apply(this._socket, args);
  return this;
};


module.exports = SocketRxClient;



