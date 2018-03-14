/** 
 * This file is for all database configuration values
*/

var Database = {
    mongodb: {
        host: process.env.DB_HOST || 'mongodb',
        username: process.env.DB_USERNAME || '',
        password: process.env.DB_PASSWORD || '',
        port: process.env.DB_PORT || 27017,
        name: process.env.DB_NAME || 'nodejs-restful',
    },
    redis: {
        //Fill it with the corresponding values
    },
    mysql: {
        //Fill it with the corresponding values
    },
    mariadb: {
        //Fill it with the corresponding values
    },
    neo4j: {
        //Fill it with the corresponding values
    },
    sqlserver: {
        //Fill it with the corresponding values
    },
    oracle: {
        //Fill it with the corresponding values
    }
};

//Exports the database configuration
module.exports = Database;