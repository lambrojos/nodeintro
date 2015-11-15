var Db = require('tingodb')().Db;
var path = require('path');

/**
 * TODO: We need to provide tingo db with a local path! to the db folder
 *
 * https://github.com/sergeyksv/tingodb
 * https://nodejs.org/api/path.html#path_path_join_path1_path2
 * https://nodejs.org/api/globals.html#globals_dirname
 */

//var dbPath = '?';
var dbPath = path.join(__dirname, 'db');

var db = new Db(dbPath, {});
// Fetch a collection to insert document into
var collection = db.collection("ninja");

/**
 * TODO collection must be the default export for this module
 *
 * https://nodejs.org/api/modules.html#modules_cycles
 */
module.exports = collection;
