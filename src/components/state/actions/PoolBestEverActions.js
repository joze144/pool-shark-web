import { getPoolsByCategory } from '../../../services/PoolService';

export const FETCH_POOL_BEST_EVER = 'FETCH_POOL_BEST_EVER';
export const FETCH_POOL_BEST_EVER_PENDING = 'FETCH_POOL_BEST_EVER_PENDING';
export const FETCH_POOL_BEST_EVER_FULFILLED = 'FETCH_POOL_BEST_EVER_FULFILLED';
export const FETCH_POOL_BEST_EVER_REJECTED = 'FETCH_POOL_BEST_EVER_REJECTED';

// ACTION GENERATORS

const fetchPoolsBestEverAction = () => ({
  type: FETCH_POOL_BEST_EVER,
  payload: getPoolsByCategory('best_ever')
});

// EXPORT ACTIONS

export { fetchPoolsBestEverAction as fetchPoolsBestEver };