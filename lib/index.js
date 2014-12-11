
/**
 * Library dependencies.
 */

var request = require('superagent');

/**
 * Expose a `Postmates` client.
 */

module.exports = Postmates;

/**
 * Initialize a new `Postmates` with Postmates developer credentials.
 */

function Postmates(customerId, apiKey){
  if (!(this instanceof Postmates)) return new Postmates(customerId, apiKey);
  if (!customerId || customerId.length === 0)
    return throw "Need to provide customerId.";
  if (!apiKey || apiKey.length === 0) return throw "Need to provide API key.";
  this.customerId = customerId;
  this.apiKey = apiKey;
  this.host = 'https://api.postmates.com/v1/customers/' + customerId + '/';
}

/**
 * Request a Delivery quote.
 *
 * @param {Object} delivery
 *   @property {String} pickup_address
 *   @property {String} dropoff_address
 * @param {Function} fn (optional)
 */

Postmates.prototype.quote = function(delivery, fn) {
  this._post('delivery_quotes', delivery, fn);
};

/**
 * Create a Delivery.
 *
 * @param {Object} delivery
 *   @property {String} manifest
 *   @property {String} pickup_name
 *   @property {String} pickup_address
 *   @property {String} pickup_phone_number
 *   @property {String} pickup_business_name
 *   @property {String} pickup_notes
 *   @property {String} dropoff_name
 *   @property {String} dropoff_address
 *   @property {String} dropoff_phone_number
 *   @property {String} dropoff_business_name
 *   @property {String} dropoff_notes
 *   @property {Integer} quote_id
 * @param {Function} fn (optional)
 */

Postmates.prototype.new = function(delivery, fn) {
  this._post('deliveries', delivery, fn);
};

/**
 * Get Delivery details.
 *
 * @param {String} id
 * @param {Function} fn (optional)
 */

Postmates.prototype.get = function(id, fn) {
  this._get('deliveries/' + id, fn);
};

/**
 * List all Deliveries.
 *
 * @param {String} filter (optional)
 * @param {Function} fn (optional)
 */

Postmates.prototype.list = function(filter, fn) {
  var path = 'deliveries/';
  if (filter) path += '?filter=' + filter;
  this._get(path, fn);
};

/**
 * Cancel a Delivery.
 *
 * @param {String} id
 * @param {Function} fn (optional)
 */

Postmates.prototype.cancel = function(id, fn) {
  this._post('deliveries/' + id + '/cancel', null, fn);
};

/**
 * Private function to form POST request.
 *
 * @param {String} path
 * @param {Object} data
 * @param {Function} fn (optional)
 */

Postmates.prototype._post = function(path, data, fn) {
  request
    .auth(this.apiKey, '')
    .type('form')
    .post(this.host + path)
    .send(data)
    .end(fn);
};

/**
 * Private function to form GET request.
 *
 * @param {String} path
 * @param {Function} fn (optional)
 */

Postmates.prototype._get = function(path, fn) {
  request
    .auth(this.apiKey, '')
    .get(this.host + path)
    .end(fn);
};
