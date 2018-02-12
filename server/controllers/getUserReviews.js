const getUserReviews = (req, res, next) => {
    req.app.get("db").getReviewByUserId(req.body.UserId).then((response) =>{
        res.json(response.data)
    })
    }
    
    module.exports = {
        getUserReviews
    }