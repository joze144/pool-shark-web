import { getTokenHolders } from '../../../services/TokenHolderService';

export const FETCH_TOKEN_HOLDERS = 'FETCH_TOKEN_HOLDERS';
export const FETCH_TOKEN_HOLDERS_PENDING = 'FETCH_TOKEN_HOLDERS_PENDING';
export const FETCH_TOKEN_HOLDERS_FULFILLED = 'FETCH_TOKEN_HOLDERS_FULFILLED';
export const FETCH_TOKEN_HOLDERS_REJECTED = 'FETCH_TOKEN_HOLDERS_REJECTED';

// ACTION GENERATORS

const fetchTokenHoldersAction = (value) => ({
  type: FETCH_TOKEN_HOLDERS,
  payload: getTokenHolders(value)
});


// EXPORT ACTIONS

export { fetchTokenHoldersAction as fetchTokenHolders };