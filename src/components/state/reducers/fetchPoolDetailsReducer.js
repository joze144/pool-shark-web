import { FETCH_POOL_DETAILS_PENDING, FETCH_POOL_DETAILS_FULFILLED, FETCH_POOL_DETAILS_REJECTED } from '../actions/PoolDetailsActions';

const initialState = {
  details: {},
  fetching: false,
  fetched: false,
  failed: false
};

export const FetchPoolDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_POOL_DETAILS_PENDING:
      return {
        ...state,
        details: {},
        fetching: true,
        fetched: false,
        failed: false
      };
    case FETCH_POOL_DETAILS_FULFILLED:
      return {
        ...state,
        details: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case FETCH_POOL_DETAILS_REJECTED:
      return {
        ...state,
        details: {},
        fetching: false,
        fetched: false,
        failed: true
      };
    default:
      return state;
  }
};