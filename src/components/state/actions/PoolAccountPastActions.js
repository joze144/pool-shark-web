import { getPoolsForAccountPast } from '../../../services/PoolService';

export const FETCH_POOL_ACCOUNT_PAST = 'FETCH_POOL_ACCOUNT_PAST';
export const FETCH_POOL_ACCOUNT_PAST_PENDING = 'FETCH_POOL_ACCOUNT_PAST_PENDING';
export const FETCH_POOL_ACCOUNT_PAST_FULFILLED = 'FETCH_POOL_ACCOUNT_PAST_FULFILLED';
export const FETCH_POOL_ACCOUNT_PAST_REJECTED = 'FETCH_POOL_ACCOUNT_PAST_REJECTED';

// ACTION GENERATORS

const fetchPoolAccountPastAction = (account) => ({
  type: FETCH_POOL_ACCOUNT_PAST,
  payload: getPoolsForAccountPast(account)
});

// EXPORT ACTIONS

export { fetchPoolAccountPastAction as fetchPoolAccountPast };