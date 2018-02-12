const axios = require("axios")
const massive = require("massive")
massive(CONNECTION_STRING)
.then(db => {
  app.set("db", db);
})
.catch(console.log);

const deleteReview = (req, res, next) => {
app.get("db").deleteReview(req.body)
    
}

module.exports = {
    deleteReview
}