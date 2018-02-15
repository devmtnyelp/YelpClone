require("dotenv").config();
let responseObj = {
  details: {},
  reviews: {}
};
let valueHolder = [];
let detailsCameBack = false;
let ourReviewsCameBack = false;
let reviewsCameBack = false;
const axios = require("axios");
const { apiKey } = process.env;
const getDetails = (req, res, next) => {
  axios
    .get(`https://api.yelp.com/v3/businesses/${req.query.restaurantId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => {
      responseObj.details = response.data;
      detailsCameBack = true;

      if (detailsCameBack && reviewsCameBack && ourReviewsCameBack) {
        res.json(responseObj);
      }
    })
    .catch(console.log);

  req.app
    .get("db")
    .getReviewsByBusinessId(req.query)
    .then(response => {
      ourReviewsCameBack = true;
      if (reviewsCameBack) {
        responseObj.reviews.reviews = responseObj.reviews.reviews.concat(
          response.data
        );
      } else {
        valueHolder = response;
      }
      if (detailsCameBack && reviewsCameBack && ourReviewsCameBack) {
        res.json(responseObj);
      }
    })
    .catch(console.log);

  axios
    .get(
      `https://api.yelp.com/v3/businesses/${req.query.restaurantId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
    .then(response => {
      responseObj.reviews = response.data;
      reviewsCameBack = true;
      if (ourReviewsCameBack) {
        console.log(valueHolder);
        responseObj.reviews.reviews = responseObj.reviews.reviews.concat(
          valueHolder
        );
      }
      if (detailsCameBack && reviewsCameBack && ourReviewsCameBack) {
        res.json(responseObj);
      }
    })
    .catch(console.log);
};

module.exports = {
  getDetails
};
