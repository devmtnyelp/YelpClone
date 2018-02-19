import axios from "axios";

const initialState = {
  searchResults: {}
};

const GET_EVENTS_FROM_SEARCH = "GET_EVENTS_FROM_SEARCH";

export function mainSearch(location, term) {
  console.log(location, term);
  return {
    type: GET_EVENTS_FROM_SEARCH,
    payload: axios
      .get(`/api/events/searchFromHeader/?location=${location}&term=${term}`)
      .then(result => result)
      .catch(console.log)
  };
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_EVENTS_FROM_SEARCH}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });
    case `${GET_EVENTS_FROM_SEARCH}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        searchResults: action.payload.data.businesses
      });
    case `${GET_EVENTS_FROM_SEARCH}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });
    default:
      return state;
  }
}
