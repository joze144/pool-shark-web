import {
  POOL_WITHDRAW_PENDING,
  POOL_WITHDRAW_FULFILLED,
  POOL_WITHDRAW_REJECTED
} from '../actions/PoolWithdrawActions';


// INITIALIZE STATE

const initialState = {
  transaction: '',
  fetching: false,
  fetched: false,
  failed: false
};


// REDUCER

export const PoolWithdrawReducer = (state = initialState, action) => {
  switch(action.type) {
    case POOL_WITHDRAW_PENDING:
      return {
        ...state,
        transaction: '',
        fetching: true,
        fetched: false,
        failed: false
      };
    case POOL_WITHDRAW_FULFILLED:
      return {
        ...state,
        transaction: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case POOL_WITHDRAW_REJECTED:
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