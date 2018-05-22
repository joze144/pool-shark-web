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
  if (action.type === CREATE_POOL_FULFILLED || action.type === CREATE_POOL_PENDING || action.type === CREATE_POOL_REJECTED) {
    console.log('pool creation');
    console.log(action.payload);
  }
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