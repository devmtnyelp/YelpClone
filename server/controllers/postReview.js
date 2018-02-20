const postReview = (req, res, next) => {
  console.log('req.body:', req.body);
  req.app
    .get('db')
    .createReview(req.body)
    .then(res.json(`success${req.body}`));
};

module.exports = {
  postReview
};
