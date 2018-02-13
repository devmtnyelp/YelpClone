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

// Database Connection
massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(console.log);

app.use(cors());
app.use(json());
app.use("/", express.static(__dirname));


// Server Endpoints
// app.get('/api/user', getUser);
// app.post('/api/user/add', addUser);
// app.put('/api/user/edit', editUser);
// app.delete('/api/user/remove', removeUser);
app.get('/api/getReview', getReview);
app.get('/api/getBusinessReviews', getBusinessReviews);
app.get('/api/getUserReviews', getUserReviews)
app.post('/api/postReview', postReview);
app.put('/api/editReview', editReview);
app.delete('/api/deleteReview', deleteReview);
app.get('/api/businessSearch', businessSearch)
app.get('/api/getDetails', getDetails)

// yarn add express cors body-parser massive dotenv
// app.get('/api/deleteReview', deleteReview.deleteReview)
// app.get('/api/editReview', editReview.editReview)
// app.get('/api/getReview', getReview.getReview)
// app.get('/api/postReview', postThisReview.postReview)
app.listen(port, function() {
  console.log("Server listening on port", port);
});
