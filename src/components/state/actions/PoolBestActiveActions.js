import { getPoolsByCategory } from '../../../services/PoolService';

export const FETCH_POOL_BEST_ACTIVE = 'FETCH_POOL_BEST_ACTIVE';
export const FETCH_POOL_BEST_ACTIVE_PENDING = 'FETCH_POOL_BEST_ACTIVE_PENDING';
export const FETCH_POOL_BEST_ACTIVE_FULFILLED = 'FETCH_POOL_BEST_ACTIVE_FULFILLED';
export const FETCH_POOL_BEST_ACTIVE_REJECTED = 'FETCH_POOL_BEST_ACTIVE_REJECTED';

// ACTION GENERATORS

const fetchPoolsBestActiveAction = () => ({
  type: FETCH_POOL_BEST_ACTIVE,
  payload: getPoolsByCategory('best_active')
});

// EXPORT ACTIONS

export { fetchPoolsBestActiveAction as fetchPoolsBestActive };