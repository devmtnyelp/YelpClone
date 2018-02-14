require('dotenv').config();
const express = require('express'),
  cors = require('cors'),
  { json } = require('body-parser'),
  port = 3001,
  app = express(),
  session = require('express-session'),
  massive = require('massive'),
  axios = require('axios');

// Controller Function

const { addUser } = require('./controllers/addUser');
const { editUser } = require('./controllers/editUser');
const { getUser } = require('./controllers/getUser');
const { removeUser } = require('./controllers/removeUser');
const { businessSearch } = require('./controllers/businessSearch');
const { deleteReview } = require('./controllers/deleteReview');
const { editReview } = require('./controllers/editReview');
const { getReview } = require('./controllers/getReview');
const { postReview } = require('./controllers/postReview');
const { getBusinessReviews } = require('./controllers/getBusinessReviews');
const { getUserReviews } = require('./controllers/getUserReviews');
const { getDetails } = require('./controllers/getDetails');

// Database Connection
massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(console.log);

app.use(cors());
app.use(json());
app.use('/', express.static(__dirname));

// Server Endpoints
app.get('/api/user/:userid', getUser);
app.post('/api/user/add', addUser);
app.put('/api/user/edit', editUser);
app.delete('/api/user/remove', removeUser);
app.put('/api/editReview', editReview);
app.delete('/api/deleteReview', deleteReview);
app.get('/api/businessSearch', businessSearch);
app.get('/api/getDetails', getDetails);

app.listen(port, () => console.log('Server listening on port', port));
