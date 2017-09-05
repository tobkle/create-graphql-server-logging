'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getLogFilename = require('./lib/getLogFilename.js');

Object.defineProperty(exports, 'getLogFilename', {
  enumerable: true,
  get: function get() {
    return _getLogFilename.getLogFilename;
  }
});

var _logger = require('./lib/logger.js');

Object.defineProperty(exports, 'logger', {
  enumerable: true,
  get: function get() {
    return _logger.logger;
  }
});
/*
 * provides logging functions to create-graphql-server
 * @public
 * @param {function} getLogFilename - get name of log file
 * @param {function} logger - write to authorization log file
 */

/* to find this path from various places, return this modules absolute path: */
var modulePath = exports.modulePath = __dirname;

/* for the authorization logic */