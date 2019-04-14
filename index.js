'use strict';

const http = require('http');

const routes = require('./routes/routes');

const server = http.createServer(routes.requestHandler);

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});