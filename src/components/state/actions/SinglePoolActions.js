import { getPoolDetails } from '../../../services/SinglePoolService';

export const FETCH_SINGLE_POOL_DETAILS = 'FETCH_SINGLE_POOL_DETAILS';
export const FETCH_SINGLE_POOL_PENDING = 'FETCH_SINGLE_POOL_PENDING';
export const FETCH_SINGLE_POOL_FULFILLED = 'FETCH_SINGLE_POOL_FULFILLED';
export const FETCH_SINGLE_POOL_REJECTED = 'FETCH_SINGLE_POOL_REJECTED';

// ACTION GENERATORS

const fetchSinglePoolAction = (value) => ({
  type: FETCH_SINGLE_POOL_DETAILS,
  payload: getPoolDetails(value)
});


// EXPORT ACTIONS

export { fetchSinglePoolAction as fetchSinglePool };