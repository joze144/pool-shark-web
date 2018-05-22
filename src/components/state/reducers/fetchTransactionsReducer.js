import {
  FETCH_TRANSACTIONS_PENDING,
  FETCH_TRANSACTIONS_FULFILLED,
  FETCH_TRANSACTIONS_REJECTED
} from '../actions/TransactionActions';


// INITIALIZE STATE

const initialState = {
  transactions: [],
  fetching: false,
  fetched: false,
  failed: false
};


// REDUCER

export const FetchTransactionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_TRANSACTIONS_PENDING:
      return {
        ...state,
        transactions: [],
        fetching: true,
        fetched: false,
        failed: false
      };
    case FETCH_TRANSACTIONS_FULFILLED:
      return {
        ...state,
        transactions: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case FETCH_TRANSACTIONS_REJECTED:
      return {
        ...state,
        transactions: [],
        fetching: false,
        fetched: false,
        failed: true
      };
    default:
      return state;
  }
};