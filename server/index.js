require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');
const port = 3001;
const app = express();
const massive = require('massive');

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

app.listen(port, () => console.log('Server listening on port', port));
