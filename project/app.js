//We're using strict mode for JavaScript
'use strict';
//Register all models
require('./core/registerModels');
//The Server Object
const Server = {
  //The configuration
  Config: require('./config/_config'),
  //This is for the API documetation
  SwaggerExpress: require('swagger-express-mw'),
  //This is a required module for routing
  App: require('express')(),
  //CORS capabilites
  CORS: require('cors')
};

//We enable CORS
Server.App.use(Server.CORS());

//Register oauth2
require('./core/oauth2/router').register(Server.App);

//Register all routers
require('./core/registerRouters').register(Server.App);

//We export the server
module.exports = Server;