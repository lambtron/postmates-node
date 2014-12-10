
var assert = require('assert');
var noop = function(){};
var request = require('superagent');

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
