//We're using strict mode for JavaScript
'use strict';

//The configuration
var config = require('./config/_config');

//This is for the API documetation
var SwaggerExpress = require('swagger-express-mw');

//This is a required module for routing
var app = require('express')();

//CORS capabilites
var cors  = require('cors');
app.use(cors());

//This create the SwaggerExpress App
SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  //Here we listen to the "X" port
  app.listen(config.appPort);

  //Print that server is running
  console.log('API running on http://localhost:' + config.appPort);
});
