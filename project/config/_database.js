/** 
 * This file is for all database configuration values
*/

var database = {
    mongodb: {
        driver: process.env.MONGO_DRIVER || 'mongoose', 
        host: process.env.MONGO_HOST || 'mongodb',
        username: process.env.MONGO_USERNAME || '',
        password: process.env.MONGO_PASSWORD || '',
        port: process.env.MONGO_PORT || '27017',
        database_name: process.env.MONGO_DATABASE_NAME || 'nodejs-restful',
    },
    redis:{
        //Fill it with the corresponding values
    },
    mysql:{
        //Fill it with the corresponding values
    },
    mariadb:{
        //Fill it with the corresponding values
    },
    neo4j:{
        //Fill it with the corresponding values
    },
    sqlserver:{
        //Fill it with the corresponding values
    },
    oracle:{
        //Fill it with the corresponding values
    }
};

//Exports the database configuration
module.exports  = database;