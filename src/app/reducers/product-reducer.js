import {
  SET_PRODUCTS,
  SET_SEARCH_TEXT
} from '../constants/';

const initialState = {
  all: null,
  searchText: null
}

export default function(state=initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        all: action.payload
      }
    case SET_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload
      }
    default:
      return state;
  }
}