/** Database setup for jobly. */

const util = require('util');

// Provide polyfill for TextEncoder if it's not available
if (typeof TextEncoder === 'undefined') {
  const { TextEncoder } = require('util');
  global.TextEncoder = TextEncoder;
}

const { Client } = require("pg");
const { DB_URI } = require('./config');


const client = new Client(DB_URI);

client.connect();

module.exports = client;
