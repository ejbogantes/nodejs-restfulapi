//We're using strict mode for JavaScript
'use strict';
//We require the Server
const Server = require('./app');
//This create the SwaggerExpress App
Server.SwaggerExpress.create(Server.Config, function (err, swaggerExpress) {
    if (err) {
        throw err;
    }
    // install middleware
    swaggerExpress.register(Server.App);
    //Here we listen to the "X" port
    Server.App.listen(Server.Config.appPort);
    //Print that server is running
    console.log('RESTful API running on ' + Server.Config.appUrl + ':' + Server.Config.appPort);
});
