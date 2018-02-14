const getReview = (req, res, next) => {
  req.app
    .get('db')
    .getReviewsByReviewId(req.query)
    .then((response) => {
      res.json(response);
    });
};

module.exports = {
  getReview,
};

