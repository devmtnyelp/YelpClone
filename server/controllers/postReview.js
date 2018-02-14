const postReview = (req, res, next) => {
  req.app
    .get("db")
    .createReview(req.body)
    .then(res.json(`success${req.body}`));
};

module.exports = {
  postReview
};
