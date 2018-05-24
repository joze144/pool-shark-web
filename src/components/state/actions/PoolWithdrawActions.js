import { withdrawFromPool } from '../../../services/PoolTransferService';

export const POOL_WITHDRAW = 'POOL_WITHDRAW';
export const POOL_WITHDRAW_PENDING = 'POOL_WITHDRAW_PENDING';
export const POOL_WITHDRAW_FULFILLED = 'POOL_WITHDRAW_FULFILLED';
export const POOL_WITHDRAW_REJECTED = 'POOL_WITHDRAW_REJECTED';

const poolWithdrawAction = (pool) => ({
  type: POOL_WITHDRAW,
  payload: withdrawFromPool(pool)
});

// EXPORT ACTIONS

export { poolWithdrawAction as poolWithdraw };