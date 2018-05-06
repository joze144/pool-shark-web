import { FETCH_ACCOUNTS_FULFILLED, FETCH_ACCOUNTS_REJECTED } from '../actions/Web3Actions';

const initialState = {
  accounts: [],
  accounts_fetched: false
};

export const FetchAccountsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ACCOUNTS_FULFILLED:
      return {
        ...state,
        accounts: action.payload,
        accounts_fetched: true
      };
    case FETCH_ACCOUNTS_REJECTED:
      return {
        ...state,
        accounts_fetched: false
      };
    default:
      return state;
  }
};
