const fs = require('fs');
const path = require('path');

const getData = require('../queries/getData');
const postData = require('../queries/postData');

const serverError = (err, response) => {
    response.writeHead(500, {'Content-Type': 'text/html'});
    response.end('<h1>Sorry problem loading the onions</h1>');
    console.log(err);
};

const homeHandler = response => {
    const filePath = path.join(__dirname, '../../..', 'public', 'index.html');
    readFile(filePath, (err, file) => {
        if (err) return serverError(err, response);
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(file);
    });
};

const publicHandler = (response, url) => {
    const filePath = path.join(__dirname, '../../..', url);
    readFile(filePath, (err, file) => {
        if (err) return serverError(err, response);
        const extension = url.split('.')[1];
        const extensionType = {
            html: 'text/html',
            css: 'text/css',
            js: 'application/javascript',
            ico: 'image/x-icon',
            png: 'image/png',
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            svg: 'image/svg'
        };
        response.writeHead(200, {'Content-Type': extensionType[extension]});
        response.end(file);    
    });
};

const errorHandler = response => {
    response.writeHead(404, {'Content-Type':'text/html'});
    response.end('<h1>404 Onions Missing</h1>');
};