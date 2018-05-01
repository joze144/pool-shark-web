import {
  FETCH_SINGLE_POOL_PENDING,
  FETCH_SINGLE_POOL_FULFILLED,
  FETCH_SINGLE_POOL_REJECTED
} from '../actions/SinglePoolActions';


// INITIALIZE STATE

const initialState = {
  pool: {},
  fetching: false,
  fetched: false,
  failed: false
};


// REDUCER

export const FetchSinglePoolReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SINGLE_POOL_PENDING:
      return {
        ...state,
        pool: {},
        fetching: true,
        fetched: false,
        failed: false
      };
    case FETCH_SINGLE_POOL_FULFILLED:
      return {
        ...state,
        pool: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case FETCH_SINGLE_POOL_REJECTED:
      return {
        ...state,
        pool: {},
        fetching: false,
        fetched: false,
        failed: true
      };
    default:
      return state;
  }
};