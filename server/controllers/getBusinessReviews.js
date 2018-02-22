const axios = require('axios');
const { apiKey } = process.env;

const getBusinessReviews = (req, res, next) => {
  let ourReviewsCameBack = false;
  let reviewsCameBack = false;
  let reviews = [];
  //the yelp api limits the search reviews to 3 responses so the getdetails review section gets the same thing
  const timeFormater = input => {
    input = JSON.stringify(input);
    var arr = input.split('T');

    arr[0] = arr[0].split('');
    arr[0].splice(0, 1);
    arr[0] = arr[0].join('');

    arr[1] = arr[1].split('');
    arr[1].splice(8, 6);
    arr[1] = arr[1].join('');

    return arr.join(' ');
  };

  const dataFormater = (input) =>{
    var d = new Date(0);

      
    reviews = input.map((val, i)=>{
        if(val.userid){
            d = new Date(0)
            d.setUTCSeconds(val.time)
            val.text = val.reviewbody
            val.user = {
                image_url: val.avatar,
                name: val.name
            }
            val.time_created = timeFormater(d),
            val.url = `localhost:3000/businessdetails/${val.restaurantid}`
        }
         else{
           val.url = `localhost:3000/businessdetails/${req.query.restaurantId}`
         }
        return val
    })
    res.json(reviews)
  }
  
  req.app
    .get('db')
    .getReviewsByBusinessId(req.query)
    .then(response => {
      
      reviews = reviews.concat(response);
      ourReviewsCameBack = true;
      if (reviewsCameBack) {
        dataFormater(reviews)
      }
    });

  axios
    .get(
      `https://api.yelp.com/v3/businesses/${req.query.restaurantId}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
    .then(response => {
      reviews = reviews.concat(response.data.reviews);
      reviewsCameBack = true;
      if (ourReviewsCameBack) {
        dataFormater(reviews)
      }
    })
    .catch(console.log);
};

module.exports = {
  getBusinessReviews
};
