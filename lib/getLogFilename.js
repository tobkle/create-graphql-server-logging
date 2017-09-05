'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLogFilename = getLogFilename;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get name for the log file
 * reads package.json for config.logfile variable
 * @public
 * @return (string) logFilename - path and file name for the log file
 */

function getLogFilename() {
  var logFilename = _path2.default.normalize(process.env.npm_package_config_logfile || 'all-logs-readable.log');
  return logFilename;
}