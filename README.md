postmates-node
==============

> A node.js client for the Postmates [API](https://postmates.com/developer/docs).

### Getting Started

Install the module:
```bash
$ npm install --save postmates
```

Create an instance of `Postmates` that you can use to interact with their endpoints:
```javascript
var Postmates = require('postmates');
var postmates = new Postmates('yourCustomerId', 'yourAPIkey');
```

### Examples

Get a quote:
```javascript
var delivery = {
  pickup_address: "20 McAllister St, San Francisco, CA",
  dropoff_address: "101 Market St, San Francisco, CA"
};

postmates.quote(delivery, function(err, res) {
  console.log(res.body.fee); // 799
});
```

Create a delivery:
```javascript
var delivery = {
  manifest: "a box of kittens",
  pickup_name: "The Warehouse",
  pickup_address: "20 McAllister St, San Francisco, CA",
  pickup_phone_number: "555-555-5555",
  pickup_business_name: "Optional Pickup Business Name, Inc.",
  pickup_notes: "Optional note that this is Invoice #123",
  dropoff_name: "Alice",
  dropoff_address: "101 Market St, San Francisco, CA",
  dropoff_phone_numbe: "415-555-1234",
  dropoff_business_name: "Optional Dropoff Business Name, Inc.",
  dropoff_notes: "Optional note to ring the bell",
  quote_id: "qUdje83jhdk"
};

postmates.new(delivery, function(err, res) {
  // `res.body`
});
```

Get delivery details:
```javascript
postmates.get('qUdje83jhdk', function(err, res) {
  console.log(res.body.status); // "pickup"
});
```

Get all deliveries:
```javascript
postmates.list('ongoing', function(err, res) {
  // `res.body` is an array of Delivery objects
});
```

Cancel a delivery:
```javascript
postmates.cancel('qUdje83jhdk', function(err, res) {
  // `res.body`
});
```

### API

#### new Postmates(customerId, apiKey)

Create a new Postmates instance that can get quotes, create deliveries, get delivery details, and cancel deliveries.

#### .quote(object, fn)

Get a Delivery Quote. Parameter `object` required:

```javascript
{
  pickup_address: "20 McAllister St, San Francisco, CA",
  dropoff_address: "101 Market St, San Francisco, CA"
}
```

Sample DeliveryQuote response:

```javascript
{
  kind: "delivery_quote",
  id: "dqt_qUdje83jhdk",
  created: "2014-08-26T10:04:03Z",
  expires: "2014-08-26T10:09:03Z",
  fee: 799,
  currency: "usd",
  dropoff_eta: "2014-08-26T12:15:03Z",
  duration: 60
}
```

#### .new(object, fn)

Create a Delivery. Parameter `object` required:

```javascript
{
  manifest: "a box of kittens",
  pickup_name: "The Warehouse",
  pickup_address: "20 McAllister St, San Francisco, CA",
  pickup_phone_number: "555-555-5555",
  pickup_business_name: "Optional Pickup Business Name, Inc.",
  pickup_notes: "Optional note that this is Invoice #123",
  dropoff_name: "Alice",
  dropoff_address: "101 Market St, San Francisco, CA",
  dropoff_phone_numbe: "415-555-1234",
  dropoff_business_name: "Optional Dropoff Business Name, Inc.",
  dropoff_notes: "Optional note to ring the bell",
  quote_id: "qUdje83jhdk"
}
```

#### .get(deliveryId, fn)

Retrieve a Delivery. Parameter `deliveryId` required.

Sample Delivery response:

```javascript
{
  "kind": "delivery",
  "created": "2014-08-26T10:04:03Z",
  "updated": "2014-08-26T11:21:16Z",
  "status": "pickup",
  "complete": false,
  "pickup_eta": "2014-08-26T10:16:00Z",
  "dropoff_eta": "2014-08-26T10:29:00Z",
  "dropoff_deadline": "2014-08-26T10:45:00Z",
  "quote_id": "qUdje83jhdk",
  "fee": 799,
  "currency": "usd",
  "manifest": {
    "description": "10kg cardboard box",
  },
  "pickup": {
    "name": "The Warehouse",
    "phone_number": "5555555555",
    "address": "20 McAllister St, San Francisco, CA 94102",
    "notes": "Invoice #123",
    "location" : {
        "lat" : 37.781116,
        "lng" : -122.412339
    },
  },
  "dropoff": {
    "name": "Alice Customer"
    "phone_number": "4155555555",
    "address": "101 Market St, San Francisco, CA 94105",
    "notes": "Ring the bell, meow loudly.",
    "location" : {
        "lat" : 37.793274,
        "lng" : -122.395934
    },
  },
  "courier": {
    "name": "Robo Courier",
    "location" : {
        "lat" : 37.42291810,
        "lng" : -122.08542120
    },
    "img_href": "https://images.postmates.com/06c9a53c-f89f-4eac-8861-60e34039d9ea/121.jpg"
  }
}
```

#### .list(filter, fn)

Retrieve all deliveries for a customer. Parameter `filter` is optional. An example of `filter` is 'ongoing', which would return a list of all deliveries with statuses 'ongoing'.

#### .cancel(deliveryId, fn)

Cancel an ongoing delivery. Parameter `deliveryId` required.

## License (MIT)

    WWWWWW||WWWWWW
     W W W||W W W
          ||
        ( OO )__________
         /  |           \
        /o o|    MIT     \
        \___/||_||__||_|| *
             || ||  || ||
            _||_|| _||_||
           (__|__|(__|__|

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.