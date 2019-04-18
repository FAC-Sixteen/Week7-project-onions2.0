const { homeHandler, 
        publicHandler,
        getActionsHandler,
        getOpinionsHandler,
        loginHandler,
        postHandler,
        errorHandler } = require('./handlers');

const router = (request, response) => {
    const url = request.url;
    if (url === '/') {
        homeHandler(response);
    } else if (url === '/login' && request.method === 'POST') {
        console.log("Arrived in the back!");
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