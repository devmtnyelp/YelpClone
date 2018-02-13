const getBusinessReviews = (req, res, next) => {
    req.app.get("db").getReviewsByBusinessId(req.query).then((response) =>{
        res.json(response)
    })
    }
    
    module.exports = {
        getBusinessReviews
    }