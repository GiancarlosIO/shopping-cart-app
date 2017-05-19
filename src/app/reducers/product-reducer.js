import {
  SET_PRODUCTS
} from '../constants/';

const initialState = {
  all: null
}

export default function(state=initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        all: action.payload
      }
    default:
      return state;
  }
}