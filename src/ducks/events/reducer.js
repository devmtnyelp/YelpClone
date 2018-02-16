import axios from 'axios';

const initialState = {
  details: {}
};

const BUSINESS_DETAILS = 'LOGIN_USER';

export function getDetails(restaurantId) {
  return {
    type: BUSINESS_DETAILS,
    payload: axios
      .post('/api/getDetails/', { restaurantId })
      .then(response => response.data)
      .catch(console.log)
  };
}

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case `${BUSINESS_DETAILS}_FULFILLED`:
      console.log(action.payload);
      return Object.assign({}, state, { details: action.payload });
    default:
      return state;
  }
}
