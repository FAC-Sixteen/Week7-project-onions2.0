const http = require('http');
const router = require('./router');
const port = process.env.PORT || 7007;
const server = http.createServer(router);

server.listen(port, () => {
    console.log(`Onions found on port ${port}`);
});

