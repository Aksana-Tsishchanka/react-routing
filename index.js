const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const session = require('express-session');
// const path = require('path');

server.use(middlewares);
server.use(session({
  secret: 'LEKWJt3l;k4j5l;k2m',
}));

server.use(jsonServer.bodyParser);

server.post('/login', (req, res) => {
  const { login, password } = req.body;
  if (login === 'admin' && password === 'admin') {
    req.session.isAuthorized = true;
    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});
server.get('/login', (req, res) => {
  if (req.session.isAuthorized) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

server.get('/logout', (req, res) => {
  req.session.isAuthorized = false;
  res.sendStatus(200);
});

server.use((req, res, next) => {
  if (req.session.isAuthorized === true) {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use(router);

server.listen(3000, () => console.log('JSON Server is running'));
