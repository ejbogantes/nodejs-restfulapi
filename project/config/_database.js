/** 
 * This file is for all database configuration values
*/

var Database = {

    //General Settings for Database
    defaultConn:      'mongodb',
    defaultHost:      'localhost',
    defaultUser:      '',
    defaultPassword:  '',
    defaultPort:      27017,

    //available connections
    connections: {
        mongo: {
            driver: 'mongoose',
            host: process.env.DB_HOST || 'mongo',
            username: process.env.DB_USERNAME || '',
            password: process.env.DB_PASSWORD || '',
            port: process.env.DB_PORT || 27017,
            database: process.env.DB_DATABASE || 'nodejs-restful',
        },
        mysql: {
            //Fill it with the corresponding values
        },
        mariadb: {
            //Fill it with the corresponding values
        },
        postgres: {
            //Fill it with the corresponding values
        },
        redis: {
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
    }
};

//Exports the database configuration
module.exports = Database;