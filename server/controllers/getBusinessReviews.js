const axios = require("axios");
const { apiKey } = process.env;

const getBusinessReviews = (req, res, next) => {
  let ourReviewsCameBack = false;
  let reviewsCameBack = false;
  let reviews = [];
  console.log(req.query);
  //the yelp api limits the search reviews to 3 responses so the getdetails review section gets the same thing
  req.app
    .get("db")
    .getReviewsByBusinessId(req.query)
    .then(response => {
      reviews = reviews.concat(response);
      ourReviewsCameBack = true;
      if (reviewsCameBack) {
        res.json(response);
      }
    });

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
      reviews = reviews.concat(response.data);
      reviewsCameBack = true;

      console.log(reviews);
      if (ourReviewsCameBack) {
        res.json(reviews);
      }
    });
};

module.exports = {
  getBusinessReviews
};
