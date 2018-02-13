<<<<<<< HEAD
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
  postThisReview = require("./controllers/postReview");
require("dotenv").config();
=======
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const port = 3001;
const app = express();
const massive = require('massive');
>>>>>>> 547fea550abb1b671a45226a783baa8b6e945007

// Controller Function
const addUser = './controllers/addUser';
const editUser = './controllers/editUser';
const getUser = './controllers/getUser';
const removeUser = './controllers/removeUser';
const deleteReview = "./controllers/deleteReview";
const editReview = "./controllers/editReview";
const getReview = "./controllers/getReview";
const postReview = "./controllers/postReview";

// Database Connection
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set('db', dbInstance))
  .catch(console.log);

app.use(cors());
<<<<<<< HEAD
app.use(bodyParser.json());
app.use("/", express.static(__dirname));

=======
app.use(json());
app.use('/', express.static(__dirname));
>>>>>>> 547fea550abb1b671a45226a783baa8b6e945007

// Server Endpoints
app.get('/api/user', getUser);
app.post('/api/user/add', addUser);
app.put('/api/user/edit', editUser);
app.delete('/api/user/remove', removeUser);
app.get('/api/getReview', getReview);
app.post('/api/postReview', postReview);
app.put('/api/editReview', editReview);
app.delete('/api/deleteReview', deleteReview);

<<<<<<< HEAD
// yarn add express cors body-parser massive dotenv
app.get('/api/deleteReview', deleteReview.deleteReview)
app.get('/api/editReview', editReview.editReview)
app.get('/api/getReview', getReview.getReview)
app.get('/api/postReview', postThisReview.postReview)
app.listen(port, function() {
  console.log("Server listening on port", port);
});
=======
app.listen(port, () => console.log('Server listening on port', port));
>>>>>>> 547fea550abb1b671a45226a783baa8b6e945007
