import {
  POOL_DEPOSIT_PENDING,
  POOL_DEPOSIT_FULFILLED,
  POOL_DEPOSIT_REJECTED
} from '../actions/PoolDepositActions';


// INITIALIZE STATE

const initialState = {
  transaction: '',
  fetching: false,
  fetched: false,
  failed: false
};


// REDUCER

export const PoolDepositReducer = (state = initialState, action) => {
  switch(action.type) {
    case POOL_DEPOSIT_PENDING:
      return {
        ...state,
        transaction: '',
        fetching: true,
        fetched: false,
        failed: false
      };
    case POOL_DEPOSIT_FULFILLED:
      return {
        ...state,
        transaction: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case POOL_DEPOSIT_REJECTED:
      return {
        ...state,
        transaction: '',
        fetching: false,
        fetched: false,
        failed: true
      };
    default:
      return state;
  }
};