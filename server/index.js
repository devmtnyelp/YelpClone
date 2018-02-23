require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require("massive");
const port = 3001;
const app = express();
const session = require('express-session');
const axios = require('axios');

const { businessSearch } = require('./controllers/businessSearch');
const { deleteReview } = require('./controllers/deleteReview');
const { editReview } = require('./controllers/editReview');
const { getReview } = require('./controllers/getReview');
const { postReview } = require('./controllers/postReview');
const { getBusinessReviews } = require('./controllers/getBusinessReviews');
const { getUserProfile } = require('./controllers/getUserProfile');
const { getDetails } = require('./controllers/getDetails');
const { autoComplete } = require('./controllers/autoComplete');
const { addUser } = require('./controllers/addUser');
const { editUser } = require('./controllers/editUser');
const { getUser } = require('./controllers/getUser');
const { removeUser } = require('./controllers/removeUser');
const { storeUserInfoInHeroku } = require('./controllers/authCtrl');


// Database Connection
massive(process.env.CONNECTION_STRING).then(db => app.set("db", db));

app.use(cors());
app.use(json());
app.use("/", express.static(__dirname));

// Database Connection

// --- Server Endpoints --- //

app.get('/api/getUserInfo', getUserProfile);

// User Endpoints
app.get("/api/user/:userid", getUser);
app.post("/api/user/add", addUser);
app.put("/api/user/edit", editUser);
app.delete("/api/user/remove", removeUser);
app.post("/api/storeuserinfo", storeUserInfoInHeroku);
app.post("/api/saveuserinfo", addUser)
// Review Endpoints
app.put("/api/editReview", editReview);
app.delete("/api/deleteReview", deleteReview);
app.get("/api/getBusinessReviews", getBusinessReviews);
app.post("/api/postReview", postReview);

// Business Endpoints
app.get("/api/businessSearch", businessSearch);
app.get("/api/getDetails", getDetails);

// Search Endpoints
app.get(`/api/events/searchFromHeader/`, businessSearch);
app.get("/api/autoComplete", autoComplete);

app.listen(port, () => console.log("Server listening on port", port));
