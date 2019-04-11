const { homeHandler, 
        publicHandler,
        getHandler,
        postHandler,
        errorHandler } = require('./handlers');

const router = (request, response) => {
    const url = request.url;
    if (url === '/') {
        homeHandler(request, response);
    } else if (url.includes('public')) {
        publicHandler(request, response, url);
    } else if (url.includes('get-')) {
        getHandler(request, response, url);
    } else if (url === '/post-opinions') {
        postHandler(request, response, url);
    } else {
        errorHandler(response);
    };
};

module.exports = router;