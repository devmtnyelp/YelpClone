require("dotenv").config();

const axios = require("axios");
const { apiKey } = process.env;
const businessSearch = (req, res, next) => {
  console.log(
    `https://api.yelp.com/v3/businesses/search?location=${
      req.query.location
    }&term=${req.query.term}`
  );
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?location=${
        req.query.location
      }&term=${req.query.term}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
    .then(response => {
      console.log(req.query);
      return res.json(response.data);
    })
    .catch(console.log);
};

module.exports = {
  businessSearch
};
