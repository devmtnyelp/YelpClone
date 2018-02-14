require("dotenv").config();

const axios = require("axios");
const { apiKey } = process.env;
const businessSearch = (req, res, next) => {
  console.log("hellurrrr");
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
      console.log(response.data);
      return res.json(response.data);
    })
    .catch(console.log);
};

module.exports = {
  businessSearch
};
