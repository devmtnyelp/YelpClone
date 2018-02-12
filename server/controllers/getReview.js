const getReview = (req, res, next) => {
    req.app.get("db").getReviewsByReviewId(req.body.reviewId).then((response) =>{
        res.json(response.data)
    })
    }
    
    module.exports = {
        getReview
    }