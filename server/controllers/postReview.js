const postReview = (req, res, next) => {
req.app.get("db").postReview(req.body.review)
}

module.exports = {
    postReview
}