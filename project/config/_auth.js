/** 
 * This file is for all auth configuration values
*/
var auth = {
    JWT: {
        secret: process.env.JWT_SECRET || 'test',
        session: false
    }
};
//Exports the database configuration
module.exports = auth;