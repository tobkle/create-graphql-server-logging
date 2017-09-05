'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = logger;

var _constants = require('../constants');

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_winston2.default.emitErrs = true;

/**
 * create timestamps in local format
 * @private
 * @return {string} timestamp - current time stamp in local format
 */

var timestamp = function timestamp() {
  return new Date(Date.now()).toLocaleString();
};

/**
 * formats the output message string
 * @private
 * @param {object} options - options timestamp, message, meta, level
 * @return {string} message - prepares output message
 */

var formatter = function formatter(options) {
  return options.timestamp() + ' ' + (options.level === 'error' ? ' ' + options.level.toUpperCase() : '') + ' ' + (options.message ? options.message : '') + (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
};

/**
 * Creates a logger based on winston
 * @public
 * @param {string} filename - log file name
 * @return {function} logger - logger function
 */

function logger(filename) {
  var logLevel = process.env.npm_package_config_loglevel || _constants.LOG_LEVEL;
  var maxSize = process.env.npm_package_config_maxsize || _constants.LOG_MAX_SIZE;
  var maxFiles = process.env.npm_package_config_maxfiles || _constants.LOG_MAX_FILES;
  return new _winston2.default.Logger({
    transports: [new _winston2.default.transports.File({
      level: logLevel,
      filename: filename,
      handleExceptions: true,
      json: false,
      maxsize: maxSize * 1024 * 1024, // e.g. 5MB
      maxFiles: maxFiles,
      colorize: false,
      timestamp: timestamp,
      formatter: formatter
    }), new _winston2.default.transports.Console({
      level: logLevel,
      handleExceptions: true,
      json: false,
      colorize: true,
      timestamp: timestamp,
      formatter: formatter
    })],

    exitOnError: false
  });
}