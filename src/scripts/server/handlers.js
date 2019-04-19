const { readFile } = require('fs');
const path = require('path');
const qs = require('qs');
const bcrypt = require('bcryptjs');

const getData = require('../queries/getData');
const postData = require('../queries/postData');
const loginQuery = require('../queries/loginQuery');

const { hashPassword,comparePasswords } = require( '../hash.js');

const serverError = (err, response) => {
    response.writeHead(500, {'Content-Type': 'text/html'});
    response.end('<h1>Sorry problem loading the onions</h1>');
    console.log(err);
};

const loginHandler = (request, response) => {
    let data = '';
    request.on('data', chunk => {
        data += chunk;
    });
    request.on('end', () => {
        console.log(data);
        const { username, password } = qs.parse(data);
           
            loginQuery(username) 
             .then(storedPassword => {bcrypt.compare(password, storedPassword)})
            .then(isMatch => {
                if (!isMatch) { 
                    response.writeHead(401, {'Content-Type':'text/html'});
                    response.end('Incorrect password!');
                } else if (isMatch) {
                    response.writeHead(302, 
                        {'Location': '/',
                         'Set-Cookie':'logged_in=true'});
                    return response.end();
                }
                })
                .catch (err) => {
                    console.log(err ,'compare failed');
                      response.writeHead(401, {'Content-Type':'text/html'});
                    response.end('compare failled!');
                }
                });                
        });
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
            svg: 'image/svg',
            mp4: 'video/mp4',
            woff: 'font/woff',
             ttf:  'font/ttf'
        };
        response.writeHead(200, {'Content-Type': extensionType[extension]});
        response.end(file);    
    });
};

const getActionsHandler = (response) => {
    getData.actionQuery((err, actions) => {
        if (err) return serverError(err, response);
        response.writeHead(200, {'Content-Type' : 'application/json'});
        response.end(JSON.stringify(actions))
    });
};

const getOpinionsHandler = (response, url) => {
     //to be continued we haven't written the dom for this yet
    getData.opinionQuery((err, opinions) => {
        if (err) return serverError(err, response);
        response.writeHead(200, {'Content-Type' : 'application/json'});
        response.end(JSON.stringify(opinions))
    },url);
};

const postHandler = (request, response) => {
    let data = '';
    request.on('data', chunk => {
        data += chunk;
    });
    request.on('end', () => {
        const { name, opinion, action_id } = qs.parse(data);
        postData(name, opinion, action_id, err => {
            if (err) return serverError(err, response);
            response.writeHead(302, {'Location': '/'});
            response.end();
        }); 
    });
};

const errorHandler = (request, response) => {
    readFile(path.join(__dirname, "../../../public/error.html"), (error, file) => {
        if (error) {
            console.log(error);
            return;
        }
        else {
        response.writeHead(404, { "Content-Type": "text/html" });
        response.end(file);
        }
    })
};

module.exports = {
    homeHandler,
    publicHandler,
    errorHandler,
    getActionsHandler,
    getOpinionsHandler,
    postHandler,
    loginHandler
};