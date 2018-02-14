const axios = require("axios");
const { apiKey } = process.env;

const autoComplete = (req, res, next) => {
  axios
    .get(
      `https://api.yelp.com/v3/autocomplete?text=${req.query.text}&latitude=${
        req.query.latitude
      }&longitude=${req.query.longitude}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
    .then(response => {
      res.json(response.data);
    });
};
module.exports = {
  autoComplete
};
