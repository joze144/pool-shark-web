import { createPool } from '../../../services/CreatePoolService';

export const CREATE_POOL = 'CREATE_POOL';
export const CREATE_POOL_PENDING = 'CREATE_POOL_PENDING';
export const CREATE_POOL_FULFILLED = 'CREATE_POOL_FULFILLED';
export const CREATE_POOL_REJECTED = 'CREATE_POOL_REJECTED';

const createPoolAction = (pool) => ({
  type: CREATE_POOL,
  payload: createPool(pool)
});

// EXPORT ACTIONS

export { createPoolAction as createPool };