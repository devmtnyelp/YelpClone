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
app.get('/api/getReview', getReview);
app.post('/api/postReview', postReview);
app.put('/api/editReview', editReview);
app.delete('/api/deleteReview', deleteReview);

app.listen(port, () => console.log('Server listening on port', port));
