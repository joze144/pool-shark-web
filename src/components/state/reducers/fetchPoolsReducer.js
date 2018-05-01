import {
  FETCH_POOL_PENDING,
  FETCH_POOL_FULFILLED,
  FETCH_POOL_REJECTED
} from '../actions/PoolActions';


// INITIALIZE STATE

const initialState = {
  pools: [],
  fetching: false,
  fetched: false,
  failed: false
};


// REDUCER

export const FetchPoolsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POOL_PENDING:
      return {
        ...state,
        pools: [],
        fetching: true,
        fetched: false,
        failed: false
      };
    case FETCH_POOL_FULFILLED:
      return {
        ...state,
        pools: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case FETCH_POOL_REJECTED:
      return {
        ...state,
        pools: [],
        fetching: false,
        fetched: false,
        failed: true
      };
    default:
      return state;
  }
};