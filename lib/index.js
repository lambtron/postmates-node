
var assert = require('assert');
var clone = require('clone');
var debug = require('debug')('analytics-node');
var noop = function(){};
var request = require('superagent');
require('superagent-proxy')(request);
var type = require('component-type');
var join = require('join-component');
var uid = require('uid');
var version = require('../package.json').version;
var extend = require('lodash').extend;

global.setImmediate = global.setImmediate || process.nextTick.bind(process);

/**
 * Expose an `Postmates` client.
 */

module.exports = Postmates;

/**
 * Initialize a new `Postmates` with Postmates developer credentials.
 */

function Postmates(customerId, apiKey){
  if (!(this instanceof Postmates)) return new Postmates(customerId, apiKey);
  this.customerId = customerId;
  this.apiKey = apiKey;
  this.host = options.host || 'https://api.postmates.com/v1/customers/'
    + customerId + '/';
}

/**
 * Request a Delivery quote.
 */

Postmates.prototype.getQuote = function() {
};

/**
 * Create a Delivery.
 */

Postmates.prototype.createDelivery = function() {
};

/**
 * Get Delivery status.
 */

Postmates.prototype.getDeliveryStatus = function() {
};
