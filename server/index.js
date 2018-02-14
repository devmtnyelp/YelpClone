const express = require("express"),
  cors = require("cors"),
  {json} = require("body-parser"),
  port = 3001,
  app = express(),
  // config = require("./config"),
  session = require("express-session"),
  massive = require("massive"),
  axios = require("axios"),
  {businessSearch} = require("./controllers/businessSearch"),
  {deleteReview} = require("./controllers/deleteReview"),
  {editReview} = require("./controllers/editReview"),
  {getReview} = require("./controllers/getReview"),
  {postReview} = require("./controllers/postReview"),
  {getBusinessReviews} = require("./controllers/getBusinessReviews"),
  {getUserReviews} = require("./controllers/getUserReviews"),
  {getDetails} = require('./controllers/getDetails')
require("dotenv").config();

// Controller Functions
const addUser = './controllers/addUser';
const editUser = './controllers/editUser';
const getUser = './controllers/getUser';
const removeUser = './controllers/removeUser';
// const deleteReview = "./controllers/deleteReview";
// const editReview = "./controllers/editReview";
// const getReview = "./controllers/getReview";
// const postReview = "./controllers/postReview";


// Controller Function

const { addUser } = require('./controllers/addUser');
const { editUser } = require('./controllers/editUser');
const { getUser } = require('./controllers/getUser');
const { removeUser } = require('./controllers/removeUser');
const { deleteReview } = require('./controllers/deleteReview');
const { editReview } = require('./controllers/editReview');
const { getReview } = require('./controllers/getReview');
const { postReview } = require('./controllers/postReview');

// Database Connection
massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(console.log);

app.use(cors());
app.use(json());
app.use('/', express.static(__dirname));
as
// Server Endpoints
app.get('/api/user/:userid', getUser);
app.post('/api/user/add', addUser);
app.put('/api/user/edit', editUser);
app.delete('/api/user/remove', removeUser);
app.get('/api/getReview', getReview);
app.get('/api/getBusinessReviews', getBusinessReviews);
app.get('/api/getUserReviews', getUserReviews)
app.post('/api/postReview', postReview);
app.put('/api/editReview', editReview);
app.delete('/api/deleteReview', deleteReview);
app.get('/api/businessSearch', businessSearch)
app.get('/api/getDetails', getDetails)

app.listen(port, () => console.log('Server listening on port', port));

