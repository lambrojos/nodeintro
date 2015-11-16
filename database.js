var Db = require('tingodb')().Db;
var path = require('path');

/**
 * TODO: We need to provide tingo db with a local path! the db folder
 * is called "db"
 *
 * https://github.com/sergeyksv/tingodb
 * https://nodejs.org/api/path.html#path_path_join_path1_path2
 * https://nodejs.org/api/globals.html#globals_dirname
 */

//var dbPath = '?';

var db = new Db(dbPath, {});
// Fetch a collection to insert document into
var collection = db.collection("ninja");

/**
 * TODO the collection var must be the default export for this module
 *
 * https://nodejs.org/api/modules.html#modules_cycles
 */
