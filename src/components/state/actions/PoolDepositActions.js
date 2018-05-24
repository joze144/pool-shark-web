import { depositToPool } from '../../../services/PoolTransferService';

export const POOL_DEPOSIT = 'POOL_DEPOSIT';
export const POOL_DEPOSIT_PENDING = 'POOL_DEPOSIT_PENDING';
export const POOL_DEPOSIT_FULFILLED = 'POOL_DEPOSIT_FULFILLED';
export const POOL_DEPOSIT_REJECTED = 'POOL_DEPOSIT_REJECTED';

const poolDepositAction = (pool, amount) => ({
  type: POOL_DEPOSIT,
  payload: depositToPool(pool, amount)
});

// EXPORT ACTIONS

export { poolDepositAction as poolDeposit };