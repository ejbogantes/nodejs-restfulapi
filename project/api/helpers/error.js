//We use strict from JS
'use strict';

//The required modules
const schemas = require('pretty-error');

module.exports = {

    //This prints the error on console
    print: function (err, log = true) {
        
        //class to handle error printing
        let pe = new PrettyError();
        
        //rederer for errors
        let renderedError = pe.render(err);

        //prints the error
        console.log(renderedError);
    }
};