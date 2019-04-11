const fs = require('fs');
const path = require('path');

const getData = require('../queries/getData');
const postData = require('../queries/postData');

const serverError = (err, response) => {
    response.writeHead(500, {'Content-Type': 'text/html'});
    response.end('<h1>Sorry problem loading the onions</h1>');
    console.log(err);
};
