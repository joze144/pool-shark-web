import { getPoolsByCategory } from '../../../services/PoolService';

export const FETCH_POOL_LATEST = 'FETCH_POOL_LATEST';
export const FETCH_POOL_LATEST_PENDING = 'FETCH_POOL_LATEST_PENDING';
export const FETCH_POOL_LATEST_FULFILLED = 'FETCH_POOL_LATEST_FULFILLED';
export const FETCH_POOL_LATEST_REJECTED = 'FETCH_POOL_LATEST_REJECTED';

// ACTION GENERATORS

const fetchPoolsLatestAction = () => ({
  type: FETCH_POOL_LATEST,
  payload: getPoolsByCategory('latest')
});

// EXPORT ACTIONS

export { fetchPoolsLatestAction as fetchPoolsLatest };