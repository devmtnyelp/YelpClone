const editReview = (req, res, next) => {
  req.app
    .get('db')
    .editReviewById(req.body.review)
    .then(response => {
      res.json(response.data);
    });
};
module.exports = {
  editReview
};
