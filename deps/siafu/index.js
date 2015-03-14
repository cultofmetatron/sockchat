var _ = require('lodash');
var r = require('rethinkdb');

var assure = function(obj, properties) {
  _.each(properties, function(property) {
    if (_.isUndefined(obj[property])) {
      throw new Error(property + ' not found in Siafu constructor');
    }
  });
};


var Siafu = function(options) {
  this._r = r; //basic rethingdb object
  //establish the connection object
  assure(options, ['connection']);
  assure(options.connection, ['host', 'port', 'db']);
  this._conn = options.connection;
};

Siafu.Schema = require('./lib/schema');

Siafu.prototype.createModel = function(schema) {};









