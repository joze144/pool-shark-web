import {
  CREATE_POOL_PENDING,
  CREATE_POOL_FULFILLED,
  CREATE_POOL_REJECTED
} from '../actions/CreatePoolActions';


// INITIALIZE STATE

const initialState = {
  pool: '',
  fetching: false,
  fetched: false,
  failed: false
};


// REDUCER

export const CreatePoolReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE_POOL_PENDING:
      return {
        ...state,
        pool: '',
        fetching: true,
        fetched: false,
        failed: false
      };
    case CREATE_POOL_FULFILLED:
      return {
        ...state,
        pool: action.payload,
        fetching: false,
        fetched: true,
        failed: false
      };
    case CREATE_POOL_REJECTED:
      return {
        ...state,
        pool: '',
        fetching: false,
        fetched: false,
        failed: true
      };
    default:
      return state;
  }
};