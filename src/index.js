/*
 * provides logging functions to create-graphql-server
 * @public
 * @param {function} getLogFilename - get name of log file
 * @param {function} logger - write to authorization log file
 */

/* to find this path from various places, return this modules absolute path: */
export const modulePath = __dirname;

/* for the authorization logic */
export { getLogFilename } from './lib/getLogFilename.js';
export { logger } from './lib/logger.js';
