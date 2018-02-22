import axios from 'axios';

const initialState = {
  details: {},
  info: {},
  reviews: {},
  loading: true
};

const BUSINESS_DETAILS = "LOGIN_USER";
const BUSINESS_REVIEWS = "BUSINESS_REVIEWS";
const GET_USER_DETAILS = "GET_USER_DETAILS";
const POST_REVIEW = 'POST_REVIEW';

export function getDetails(restaurantId) {
  return {
    type: BUSINESS_DETAILS,
    payload: axios
      .get(`/api/getDetails?restaurantId=${restaurantId}`)
      .then(response => response.data)
      .catch(console.log)
  };
}


export function getReviews(restaurantId) {
  return {
    type: BUSINESS_REVIEWS,
    payload: axios
      .get("/api/getBusinessReviews/", { restaurantId })
      .then(response => response.data)
      .catch(console.log)
  };
}

export function getUserDetails(userId) {
  console.log(userId);
  return {
    type: GET_USER_DETAILS,
    payload: axios
      .get(`/api/getUserInfo?userId=${userId}`)
      .then(response => response)
      .catch(console.log)
  };
}

export function postReview(reviewObject) {
  return {
    type: POST_REVIEW,
    payload: axios
      .post("/api/postReview/", reviewObject)
      .then(response => response.data)
      .catch(console.log)
  };
}

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case `${BUSINESS_DETAILS}_PENDING`:
      return Object.assign({}, state, { loading: true });
    case `${BUSINESS_DETAILS}_FULFILLED`:
      return Object.assign({}, state, {
        details: action.payload,
        loading: false
      });
    case `${BUSINESS_REVIEWS}_FULFILLED`:
      return Object.assign({}, state, { reviews: action.payload });
    case `${GET_USER_DETAILS}_FULFILLED`:
      return Object.assign({}, state, { info: action.payload });
    case `${POST_REVIEW}_FULFILLED`:
      return alert('Review Posted!');

    default:
      return state;
  }
}
