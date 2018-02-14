

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { json } = require('body-parser');


const { businessSearch } = require("./controllers/businessSearch");
const { deleteReview } = require("./controllers/deleteReview");
const { editReview } = require("./controllers/editReview");
const { getReview } = require("./controllers/getReview");
const { postReview } = require("./controllers/postReview");
const { getBusinessReviews } = require("./controllers/getBusinessReviews");
const { getUserReviews } = require("./controllers/getUserReviews");
const { getDetails } = require("./controllers/getDetails");
const { autoComplete } = require("./controllers/autoComplete");
=======
const port = 3001;
const app = express();
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');


// Controller Function


=======
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
const { storeUserInfoInHeroku } = require('./controllers/authCtrl');
const { autoComplete } = require("./controllers/autoComplete");

// Database Connection
massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))

app.use(cors());
app.use(json());


=======

app.use("/", express.static(__dirname));

// Server Endpoints
app.get('/api/user/:userid', getUser);
app.post('/api/user/add', addUser);
app.put('/api/user/edit', editUser);
app.delete('/api/user/remove', removeUser);
app.put('/api/editReview', editReview);
app.delete('/api/deleteReview', deleteReview);
app.get('/api/businessSearch', businessSearch);
app.post('api/storeuserinfo', storeUserInfoInHeroku);
app.get("/api/getBusinessReviews", getBusinessReviews);
app.post("/api/postReview", postReview);
app.get("/api/getDetails", getDetails);


// Search Endpoints
app.get(`/api/events/searchFromHeader/`, businessSearch);

r
app.get("/api/autoComplete", autoComplete);


app.listen(port, () => console.log("Server listening on port", port));

