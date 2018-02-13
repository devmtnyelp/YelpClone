const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 3001,
  app = express(),
  // config = require("./config"),
  session = require("express-session"),
  massive = require("massive"),
  deleteReview = require("./controllers/deleteReview"),
  editReview = require("./controllers/editReview"),
  getReview = require("./controllers/getReview"),
  postReview = require("./controllers/postReview");
require("dotenv").config();

// Controller Function
const addUser = './controllers/addUser';
const editUser = './controllers/editUser';
const getUser = './controllers/getUser';
const removeUser = './controllers/removeUser';
const postReview = './controllers/postReview';
const editReview = './controllers/editReview';
const getReview = './controllers/getReview';
const deleteReview = './controllers/deleteReview';

// Database Connection
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set('db', dbInstance))
  .catch(console.log);

// app.use(session(config.session));
app.use(cors());
app.use(json());
app.use('/', express.static(__dirname));

// Server Endpoints
app.get('/api/user', getUser);
app.post('/api/user/add', addUser);
app.put('/api/user/edit', editUser);
app.delete('/api/user/remove', removeUser);
app.get('/api/reviews', getReview);
app.post('/api/reviews/add', postReview);
app.put('/api/reviews/edit', editReview);
app.delete('/api/reviews/remove', deleteReview);

// yarn add express cors body-parser massive dotenv
app.get('/api/deleteReview', deleteReview.deleteReview)
app.get('/api/editReview', editReview.editReview)
app.get('/api/getReview', getReview.getReview)
app.get('/api/postReview', postReview.postReview)
app.listen(port, () => console.log('Server listening on port', port));
