require('dotenv').config();
let responseObj = {
  details: {},
  reviews: []
};
let valueHolder = [];
let detailsCameBack = false;
let ourReviewsCameBack = false;
let reviewsCameBack = false;
const axios = require('axios');
const { apiKey } = process.env;
const getDetails = (req, res, next) => {
  const timeFormater = input => {
    input = JSON.stringify(input);
    console.log(input);
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

          
        responseObj.reviews = input.reviews.map((val, i)=>{
            if(val.userid){
                d = new Date(0)
                d.setUTCSeconds(val.time)
                val.text = val.reviewtitle + val.reviewbody
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
        res.json(responseObj)
    }
//   console.log('req.query:', req.query);

  axios
    .get(`https://api.yelp.com/v3/businesses/${req.query.restaurantId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => {
      responseObj.details = response.data;
      detailsCameBack = true;

      if (detailsCameBack && reviewsCameBack && ourReviewsCameBack) {
        // console.log(valueHolder)

        dataFormater(responseObj);
      }
    });

  req.app
    .get('db')
    .getReviewsByBusinessId(req.query)
    .then(response => {
      // console.log('db' + JSON.stringify(response))
      ourReviewsCameBack = true;
      if (reviewsCameBack) {
        responseObj.reviews.reviews = valueHolder.concat(response.data);
      } else {
        valueHolder = response;
      }
      if (detailsCameBack && reviewsCameBack && ourReviewsCameBack) {
        // console.log(valueHolder)

        dataFormater(responseObj);
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
      reviewsCameBack = true;
      //   console.log('yelp' + JSON.stringify(response.data.reviews))

      if (ourReviewsCameBack) {
        responseObj.reviews = response.data.reviews.concat(valueHolder);
      } else {
        valueholder = response.data;
      }
      if (detailsCameBack && reviewsCameBack && ourReviewsCameBack) {
        //   console.log(valueHolder)
        dataFormater(responseObj);
      }
    })
    .catch(console.log);
};

module.exports = {
  getDetails
};
