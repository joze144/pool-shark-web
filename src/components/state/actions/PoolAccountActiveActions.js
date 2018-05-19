import { getPoolsForAccountActive } from '../../../services/PoolService';

export const FETCH_POOL_ACCOUNT_ACTIVE = 'FETCH_POOL_ACCOUNT_ACTIVE';
export const FETCH_POOL_ACCOUNT_ACTIVE_PENDING = 'FETCH_POOL_ACCOUNT_ACTIVE_PENDING';
export const FETCH_POOL_ACCOUNT_ACTIVE_FULFILLED = 'FETCH_POOL_ACCOUNT_ACTIVE_FULFILLED';
export const FETCH_POOL_ACCOUNT_ACTIVE_REJECTED = 'FETCH_POOL_ACCOUNT_ACTIVE_REJECTED';

// ACTION GENERATORS

const fetchPoolAccountActiveAction = (account) => ({
  type: FETCH_POOL_ACCOUNT_ACTIVE,
  payload: getPoolsForAccountActive(account)
});

// EXPORT ACTIONS

export { fetchPoolAccountActiveAction as fetchPoolAccountActive };