/** 
 * This file is for all string values in English
*/

const Strings = {

    //All Http Codes Responses
    //See http://www.restapitutorial.com/httpstatuscodes.html
    http_codes: {
        //Success

        200: 'OK',
        201: 'Created',
        204: 'No Content',

        //Redirection

        304: 'Not Modified',

        //Client Error

        400: 'Bad  Request',
        401: 'Unauthorized',
        403: 'Forbidden',
        404: 'Not Found',
        409: 'Conflict',

        //Server Error

        500: 'Internal Server Error',
        501: 'Not Implemented',
        503: 'Service Unavailable'
    },
    error_messages: {
        //General
        unauthorized: "The authentication failed. Please check your credentials.",
        userdoesnotexist: "The user does not exist. Please check your credentials."
    }
};

module.exports = Strings;