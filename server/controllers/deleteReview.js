const deleteReview = (req, res, next) => {
    req.app.get("db").deleteReviewByReviewId(req.query).then(res.json('success'))

}
module.exports = {
    deleteReview
}