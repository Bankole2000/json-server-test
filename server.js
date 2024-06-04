// import jsonServer from 'json-server';
const jsonServer = require('json-server');
const server = jsonServer.create();
const data = require('db.js')
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);