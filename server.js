'use strict';

//TODO BONUS: make eslint happy!

// require the packages we need
var  Hapi = require('hapi');
var server = new Hapi.Server();
var bunyan = require('bunyan');

//create a bunyan logger, and give it the name you prefer
var logger = '?';
var path = require('path');

//TODO require the database.js file and assign it to variable called "db"
//maybe there is something to do even in that file
var Joi = require('joi');
var Boom = require('boom');

var PORT = 8080;
var HOST = 'localhost';

/**
 * TODO: it looks like we forgot to install Inert
 * install it and require it!
 *
 * https://nodejs.org/api/modules.html
 * https://docs.npmjs.com/cli/install
 *
 */

server.connection({
  host: HOST,
  port: PORT
});


server.register([
  Inert
],
function(err){
  if(err){
    //TODO BONUS errors should be logged
  }
});



var io = require('socket.io').listen(server.listener);

io.sockets.on('connection', function (socket) {
  socket.emit('connected', { message: 'Welcome to realtime Ninjas' });
});


/**
 * TODO: use Inert to serve the client
 * Remember: static files folders can be nested so you probably will want to,
 * use the directory handler
 *
 * BONUS: use the index property to specify a default file for the
 * published directory
 *
 * https://github.com/hapijs/inert#the-directory-handler
 */
server.route({
  method: 'GET',
  path: '?',
  handler: '?'
});



/**
 * TODO let's validate them ninjas
 *
 * this joi object is initialized but (evidently) not correct.
 *
 * modify the object until client requests are successful
 * all properties should be required
 *
 *	be aware that the _id property might or might not be present
 *
 * BONUS: accept only adult ninjas ( age >= 18 )
 * BONUS: name should not contain numbers or special characters
 * you will need to use a regex :)
 *
 */
var ninjaModel = Joi.object({
  name: Joi.number(),
  age: Joi.boolean(),
  gender: Joi.string()
});

/**
 * TODO: write a whole handler that gets
 * all the ninjas stored in the datasource: the db function used is
 *
 * db.find({}, function(err, res){ --- });
 *
 * then the result must be converted to an array with the toArray method
 *
 *	result.toArray(err, res){ //res can now be sent to the client
 *
 */
server.route({
  method: 'GET',
  path: '/api/ninja',
  handler: function (request, reply) {

  }
});

// this route inserts a new ninja
server.route({
  method: 'POST',
  path: '/api/ninja',
  config: { validate: {payload: ninjaModel} },
  handler: function (request, reply) {
    /**
     * TODO persist the ninja into the datastore
     * - data is sent via a POST http request, put it in the postData variable
     */
    var postData = '?';
    db.insert(postData, function(err, result){

      if(err){
        //BONUS log all errors

        //this is how you send errors to the client
        return reply(Boom.badImplementation(err));
      }

      // and now? send the result to the client
    });
  }
});




/**
 * TODO we need an api path like this
 * /api/ninja/123 where 123 is the id used for the database operations.
 *
 * the path should be written in such a way that it should be availble in the
 *
 * request.params._id
 * http://hapijs.com/tutorials/routing
 *
 * BONUS - validate the id, it should be a positive integer, and of course
 * it should be required
 *
 *
 */
var pathWithId = '?';

//get a single ninja
server.route({
  method: 'GET',
  path: pathWithId,
  handler: function(request, reply){

    // TODO write the whole handler - the db function used the get a single
    // ninja is: db.findOne({_id: [id]), function(err, result){  ... }
    // http://hapijs.com/tutorials/routing
    //
  }
});


//update a ninja
// TODO - write the whole route!
// it should answer to POST /api/ninja/123 (where 123 is the id)
// the id should be validated as always
// to update an existing object in the database:
// db.update({_id: [_id], [object with new values], function(err, res){...}


// delete a ninja
// TODO - write the whole route! - you should be an expert now
// it should answer to DELETE /api/ninja/123 (where 123 is the id)
// the id should be validated as always
// to delete an existing object in the database:
// db.remove({_id: [_id], function(err, res){...}


server.start(function(){
  console.log('I live again - on '+ HOST +':'+ PORT);
  //TODO BONUS - log the fact that the app has started
});


// now that everything in order add socket.io events in the route handlers
