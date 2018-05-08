import {
  FETCH_POOL_BEST_EVER_PENDING,
  FETCH_POOL_BEST_EVER_FULFILLED,
  FETCH_POOL_BEST_EVER_REJECTED
} from '../actions/PoolBestEverActions';


// INITIALIZE STATE

const initialState = {
  poolsBestEver: [],
  poolBestEverFetching: false,
  poolBestEverFetched: false,
  poolBestEverFailed: false
};


// REDUCER

export const FetchPoolsBestEverReducer = (state = initialState, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch(action.type) {
    case FETCH_POOL_BEST_EVER_PENDING:
      return {
        ...state,
        poolsBestEver: [],
        poolBestEverFetching: true,
        poolBestEverFetched: false,
        poolBestEverFailed: false
      };
    case FETCH_POOL_BEST_EVER_FULFILLED:
      console.log('fulfilled');
      return {
        ...state,
        poolsBestEver: action.payload,
        poolBestEverFetching: false,
        poolBestEverFetched: true,
        poolBestEverFailed: false
      };
    case FETCH_POOL_BEST_EVER_REJECTED:
      return {
        ...state,
        poolsBestEver: [],
        poolBestEverFetching: false,
        poolBestEverFetched: false,
        poolBestEverFailed: true
      };
    default:
      return state;
  }
};