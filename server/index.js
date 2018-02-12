const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  port = 3001,
  app = express(),
  // config = require("./config"),
  session = require("express-session"),
  massive = require("massive");
require("dotenv").config();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set("db", dbInstance))
  .catch(console.log);

// app.use(session(config.session));
app.use(cors());
app.use(bodyParser.json());
app.use("/", express.static(__dirname));

app.listen(port, function() {
  console.log("Server listening on port", port);
});

// yarn add express cors body-parser massive dotenv
