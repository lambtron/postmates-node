
var assert = require('assert');
var noop = function(){};
var request = require('superagent');

global.setImmediate = global.setImmediate || process.nextTick.bind(process);

/**
 * Expose a `Postmates` client.
 */

module.exports = Postmates;

/**
 * Initialize a new `Postmates` with Postmates developer credentials.
 */

function Postmates(customerId, apiKey){
  if (!(this instanceof Postmates)) return new Postmates(customerId, apiKey);
  this.customerId = customerId;
  this.apiKey = apiKey;
  this.host = 'https://api.postmates.com/v1/customers/' + customerId + '/';
}

/**
 * Request a Delivery quote.
 *
 * @param {String} pickup
 * @param {String} dropoff
 * @param {Function} fn
 */

Postmates.prototype.quote = function(pickup, dropoff, fn) {
};

/**
 * Create a Delivery.
 *
 * @param {Object} delivery
 * @param {Function} fn
 */

Postmates.prototype.new = function(delivery, fn) {
};

/**
 * Get Delivery details.
 *
 * @param {String} id
 * @param {Function} fn
 */

Postmates.prototype.get = function(id, fn) {
};

/**
 * List all Deliveries.
 *
 * @param {Object} filter
 * @param {Function} fn
 *
 * @return {Array}
 */

Postmates.prototype.list = function(filter, fn) {
};

/**
 * Cancel a Delivery.
 *
 * @param {String} id
 * @param {Function} fn
 *
 * @return {Object}
 */

Postmates.prototype.cancel = function(id, fn) {
};
