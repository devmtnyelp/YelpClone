const getUserReviews = (req, res, next) => {
    req.app.get("db").getReviewsByUserId(req.query).then((response) =>{
        res.json(response)
    })
    }
    
    module.exports = {
        getUserReviews
    }