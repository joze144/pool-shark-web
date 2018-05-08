import { getPools } from '../../../services/PoolService';

export const FETCH_POOL = 'FETCH_POOL';
export const FETCH_POOL_PENDING = 'FETCH_POOL_PENDING';
export const FETCH_POOL_FULFILLED = 'FETCH_POOL_FULFILLED';
export const FETCH_POOL_REJECTED = 'FETCH_POOL_REJECTED';

// ACTION GENERATORS

const fetchPoolsAction = (value) => ({
  type: FETCH_POOL,
  payload: getPools(value)
});

// EXPORT ACTIONS

export { fetchPoolsAction as fetchPools };