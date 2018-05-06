import { FETCH_ACCOUNTS_FULFILLED, FETCH_ACCOUNTS_REJECTED } from '../actions/Web3Actions';

const initialState = {
  accounts: [],
  accounts_fetched: false,
  account_exists: false,
  account_selected: null
};

export const FetchAccountsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ACCOUNTS_FULFILLED: {
      const exists = action.payload.length > 0;
      let selected = null;
      if(exists) selected = action.payload[0];
      return {
        ...state,
        accounts: action.payload,
        accounts_fetched: true,
        account_exists: exists,
        account_selected: selected
      };
    }
    case FETCH_ACCOUNTS_REJECTED:
      return {
        ...state,
        accounts: [],
        accounts_fetched: false,
        account_exists: false,
        account_selected: null
      };
    default:
      return state;
  }
};
