import {
  FETCH_POOL_LATEST_PENDING,
  FETCH_POOL_LATEST_FULFILLED,
  FETCH_POOL_LATEST_REJECTED
} from '../actions/PoolLatestActions';


// INITIALIZE STATE

const initialState = {
  poolsLatest: [],
  poolLatestFetching: false,
  poolLatestFetched: false,
  poolLatestFailed: false
};


// REDUCER

export const FetchPoolsLatestReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POOL_LATEST_PENDING:
      return {
        ...state,
        poolsLatest: [],
        poolLatestFetching: true,
        poolLatestFetched: false,
        poolLatestFailed: false
      };
    case FETCH_POOL_LATEST_FULFILLED:
      return {
        ...state,
        poolsLatest: action.payload,
        poolLatestFetching: false,
        poolLatestFetched: true,
        poolLatestFailed: false
      };
    case FETCH_POOL_LATEST_REJECTED:
      return {
        ...state,
        poolsLatest: [],
        poolLatestFetching: false,
        poolLatestFetched: false,
        poolLatestFailed: true
      };
    default:
      return state;
  }
};