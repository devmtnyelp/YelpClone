let responseObj = {
  user:[],
  reviews:[]
}
let reviewsCameBack = false
let userCameBack = false

const getUserProfile = (req, res, next) => {
  console.log(req.query)
  req.app
  .get('db')
  .getUserDetails(req.query)
  .then((response) => {
    userCameBack = true
    responseObj.user = response
    if(reviewsCameBack){
      res.json(responseObj)
    }
  }).catch(console.log)

  
  req.app
    .get('db')
    .getReviewsByUserId(req.query)
    .then((response) => {
      reviewsCameBack = true
      responseObj.reviews = response
      if(userCameBack){
        res.json(responseObj)
      }    
    }).catch(console.log)
};

module.exports = {
  getUserProfile,
};
