require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const port = 3001;
const app = express();
const massive = require('massive');

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

// Server Endpoints
app.get('/api/user/:userid', getUser);
app.post('/api/user/add', addUser);
app.put('/api/user/edit', editUser);
app.delete('/api/user/remove', removeUser);
app.get('/api/getReview', getReview);
app.post('/api/postReview', postReview);
app.put('/api/editReview', editReview);
app.delete('/api/deleteReview', deleteReview);

app.listen(port, () => console.log('Server listening on port', port));
