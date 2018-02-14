require("dotenv").config();
let responseObj = {
    details:{},
    reviews:{}
}
let detailsCameBack = false
let ourReviewsCameBack = false
let reviewsCameBack = false
const axios = require("axios")
const {apiKey} = process.env
const getDetails = (req, res, next) => {
    axios.get(`https://api.yelp.com/v3/businesses/${req.query.restaurantId}`, {
        headers: {
            Authorization:`Bearer ${apiKey}`
        }
    }).then((response) =>{
        responseObj.details = response.data
        detailsCameBack = true
        if(detailsCameBack && reviewsCameBack){
            res.json(responseObj)
        }
    }).catch(console.log)

    // req.app.get("db").getReviewsByBusinessId(req.query).then((response) =>{
    //     res.json(response)
    // })

    axios.get(`https://api.yelp.com/v3/businesses/${req.query.restaurantId}/reviews`, {
        headers: {
            Authorization:`Bearer ${apiKey}`
        }
    }).then((response) =>{
        responseObj.reviews = response.data
        reviewsCameBack = true
        if(detailsCameBack && reviewsCameBack){
            res.json(responseObj)
        }
    }).catch(console.log)

    }
    
    module.exports = {
        getDetails
    }