import { getPoolsStatistics } from '../../../services/PoolStatisticsService';

export const FETCH_POOL_STATISTICS = 'FETCH_POOL_STATISTICS';
export const FETCH_POOL_STATISTICS_PENDING = 'FETCH_POOL_STATISTICS_PENDING';
export const FETCH_POOL_STATISTICS_FULFILLED = 'FETCH_POOL_STATISTICS_FULFILLED';
export const FETCH_POOL_STATISTICS_REJECTED = 'FETCH_POOL_STATISTICS_REJECTED';

// ACTION GENERATORS

const fetchPoolStatisticsAction = () => ({
  type: FETCH_POOL_STATISTICS,
  payload: getPoolsStatistics()
});

// EXPORT ACTIONS

export { fetchPoolStatisticsAction as fetchPoolStatistics };