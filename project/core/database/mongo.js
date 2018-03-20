//We're using strict mode for JavaScript
'use strict';

//required files
const mongoose = require('mongoose');
const config = require('../../config/_config');
const glob = require("glob")

/**
 * 
 * @param {*} connection 
 * @param {*} dbURI 
 * @param {*} options 
 */
function registerConnection(connection, dbURI, options = {}) {

    // Create the database connection 
    mongoose.connect(dbURI, options);

    // CONNECTION EVENTS
    // When successfully connected
    mongoose.connection.on('connected', function () {
        console.log('Mongoose connection: ' + connection + ' open to ' + dbURI);
    });

    // If the connection throws an error
    mongoose.connection.on('error', function (err) {
        console.log('Mongoose connection: ' + connection + ' error: ' + err);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose connection: ' + connection + ' disconnected');
    });

    // If the Node process ends, close the Mongoose connection 
    process.on('SIGINT', function () {
        mongoose.connection.close(function () {
            console.log('Mongoose connection: ' + connection + ' disconnected through app termination');
            process.exit(0);
        });
    });

    //Here we require all models inside ./api/models/{connectionName}/*.js
    let mongoFolder = config.appRoot + '/api/models/' + connection + '/*.js';


    //Registers all the models of this connection
    glob(mongoFolder, options, function (er, files) {
        files.forEach(function (file) {
            require(file);
            console.log('File required: ' + file);
        });
    })
}

function register() {
    //we get the connections
    const connections = config.database.connections;

    for (let conn in connections) {
        //if the connection has params and is mongoose
        if (Object.keys(connections[conn]).length > 0
            && connections[conn].driver === 'mongoose') {
            //Mongo Params
            const _conn = connections[conn];
            //Connection String 
            let connString = 'mongodb://';
            connString += _conn.host + ':';
            connString += _conn.port + '/' + _conn.database;
            //Connection Options
            const connOptions = {
                keepAlive: true,
                reconnectTries: Number.MAX_VALUE
            };
            //let's link the connection
            registerConnection(conn, connString, connOptions);
        }
    }
}

//We register all models for mongo
register();
