import { FETCH_TOKEN_HOLDERS_PENDING, FETCH_TOKEN_HOLDERS_FULFILLED, FETCH_TOKEN_HOLDERS_REJECTED } from '../actions/TokenHolderActions';

const initialState = {
  holders: [],
  fetching: false,
  fetched: false,
  failed: false
};

export const FetchTokenHoldersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TOKEN_HOLDERS_PENDING:
      return {
        ...state,
        holders: [],
        fetching: true,
        fetched: false,
        failed: false
      };
    case FETCH_TOKEN_HOLDERS_FULFILLED:
      return {
        ...state,
        holders: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case FETCH_TOKEN_HOLDERS_REJECTED:
      return {
        ...state,
        holders: [],
        fetching: false,
        fetched: false,
        failed: true
      };
    default:
      return state;
  }
};