import {
  FETCH_POOL_ACCOUNT_ACTIVE_PENDING,
  FETCH_POOL_ACCOUNT_ACTIVE_FULFILLED,
  FETCH_POOL_ACCOUNT_ACTIVE_REJECTED
} from '../actions/PoolAccountActiveActions';


// INITIALIZE STATE

const initialState = {
  pools: [],
  fetching: false,
  fetched: false,
  failed: false
};


// REDUCER

export const FetchPoolAccountActiveReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POOL_ACCOUNT_ACTIVE_PENDING:
      return {
        ...state,
        pools: [],
        fetching: true,
        fetched: false,
        failed: false
      };
    case FETCH_POOL_ACCOUNT_ACTIVE_FULFILLED:
      return {
        ...state,
        pools: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case FETCH_POOL_ACCOUNT_ACTIVE_REJECTED:
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