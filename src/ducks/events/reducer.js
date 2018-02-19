import axios from 'axios';

const initialState = {
  details: {}
};

const BUSINESS_DETAILS = 'LOGIN_USER';
const BUSINESS_REVIEWS = 'BUSINESS_REVIEWS';

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
      .get('/api/getBusinessReviews/', { restaurantId })
      .then(response => response.data)
      .catch(console.log)
  };
}

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case `${BUSINESS_DETAILS}_FULFILLED`:
      return Object.assign({}, state, { details: action.payload });
    case `${BUSINESS_REVIEWS}_FULFILLED`:
      return Object.assign({}, state, { reviews: action.payload });
    default:
      return state;
  }
}
