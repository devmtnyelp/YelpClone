const deleteReview = (req, res, next) => {
  req.app.get('db').deleteReview(req.body.id);
};
module.exports = {
  deleteReview
};
