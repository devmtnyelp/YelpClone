require('dotenv').config();
let responseObj = {
  details: {},
  reviews: {}
};
let valueHolder = [];
let detailsCameBack = false;
let ourReviewsCameBack = false;
let reviewsCameBack = false;
const axios = require('axios');
const { apiKey } = process.env;
const getDetails = (req, res, next) => {
  console.log('req.query:', req.body);
  axios
    .get(`https://api.yelp.com/v3/businesses/${req.body.restaurantId}`, {
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
    });

  req.app
    .get('db')
    .getReviewsByBusinessId(req.body)
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
    });

  axios
    .get(
      `https://api.yelp.com/v3/businesses/${req.body.restaurantId}/reviews`,
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
