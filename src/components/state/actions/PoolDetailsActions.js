import { getPoolDetails } from '../../../services/PoolDetailsService';

export const FETCH_POOL_DETAILS = 'FETCH_POOL_DETAILS';
export const FETCH_POOL_DETAILS_PENDING = 'FETCH_POOL_DETAILS_PENDING';
export const FETCH_POOL_DETAILS_FULFILLED = 'FETCH_POOL_DETAILS_FULFILLED';
export const FETCH_POOL_DETAILS_REJECTED = 'FETCH_POOL_DETAILS_REJECTED';

// ACTION GENERATORS

const fetchPoolDetailsAction = (value) => ({
  type: FETCH_POOL_DETAILS,
  payload: getPoolDetails(value)
});


// EXPORT ACTIONS

export { fetchPoolDetailsAction as fetchPoolDetails };