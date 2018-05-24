import {
  FETCH_POOL_ACCOUNT_PAST_PENDING,
  FETCH_POOL_ACCOUNT_PAST_FULFILLED,
  FETCH_POOL_ACCOUNT_PAST_REJECTED
} from '../actions/PoolAccountPastActions';


// INITIALIZE STATE

const initialState = {
  pools: [],
  fetching: false,
  fetched: false,
  failed: false
};


// REDUCER

export const FetchPoolAccountPastReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POOL_ACCOUNT_PAST_PENDING:
      return {
        ...state,
        pools: [],
        fetching: true,
        fetched: false,
        failed: false
      };
    case FETCH_POOL_ACCOUNT_PAST_FULFILLED:
      return {
        ...state,
        pools: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case FETCH_POOL_ACCOUNT_PAST_REJECTED:
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