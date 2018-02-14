const editReview = (req, res, next) => {
    req.app.get("db").editReviewById(req.body).then((response =>{
        res.json('success')
    }))
    }
    module.exports = {
        editReview
    }

