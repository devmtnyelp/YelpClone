const getBusinessReviews = (req, res, next) => {
    req.app.get("db").getReviewByBusinessId(req.body.BusinessId).then((response) =>{
        res.json(response.data)
    })
    }
    
    module.exports = {
        getBusinessReviews
    }