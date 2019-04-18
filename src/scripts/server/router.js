const { homeHandler, 
        publicHandler,
        getActionsHandler,
        getOpinionsHandler,
        postHandler,
        errorHandler } = require('./handlers');

const router = (request, response) => {
    const url = request.url;
    if (url === '/') {
        homeHandler(response);
    } else if (url === '/login' && request.method === 'post') {
        loginHandler(request, response);
    } else if (url.includes('public')) {
        publicHandler(response, url);
    } else if (url === '/get-actions') {
        getActionsHandler(response);
    } else if(url.includes('/get-opinions')){
        getOpinionsHandler(response, url);
    } else if (url === '/post-opinion') {
        postHandler(request, response);
    } else {
        errorHandler(request, response);
    }
};

module.exports = router;