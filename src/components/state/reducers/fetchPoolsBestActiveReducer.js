import {
  FETCH_POOL_BEST_ACTIVE_PENDING,
  FETCH_POOL_BEST_ACTIVE_FULFILLED,
  FETCH_POOL_BEST_ACTIVE_REJECTED
} from '../actions/PoolBestActiveActions';


// INITIALIZE STATE

const initialState = {
  poolsBestActive: [],
  poolBestActiveFetching: false,
  poolBestActiveFetched: false,
  poolBestActiveFailed: false
};


// REDUCER

export const FetchPoolsBestActiveReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POOL_BEST_ACTIVE_PENDING:
      return {
        ...state,
        poolsBestActive: [],
        poolBestActiveFetching: true,
        poolBestActiveFetched: false,
        poolBestActiveFailed: false
      };
    case FETCH_POOL_BEST_ACTIVE_FULFILLED:
      return {
        ...state,
        poolsBestActive: action.payload,
        poolBestActiveFetching: false,
        poolBestActiveFetched: true,
        poolBestActiveFailed: false
      };
    case FETCH_POOL_BEST_ACTIVE_REJECTED:
      return {
        ...state,
        poolsBestActive: [],
        poolBestActiveFetching: false,
        poolBestActiveFetched: false,
        poolBestActiveFailed: true
      };
    default:
      return state;
  }
};