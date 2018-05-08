import {
  FETCH_POOL_STATISTICS_PENDING,
  FETCH_POOL_STATISTICS_FULFILLED,
  FETCH_POOL_STATISTICS_REJECTED
} from '../actions/PoolStatisticsActions';

const initialState = {
  poolStatistics: {},
  poolStatisticsFetched: false,
  poolStatisticsFetching: false,
  poolStatisticsFailed: false
};

export const FetchPoolStatisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POOL_STATISTICS_PENDING:
      return {
        ...state,
        poolStatistics: {},
        poolStatisticsFetching: true,
        poolStatisticsFetched: false,
        poolStatisticsFailed: false
      };
    case FETCH_POOL_STATISTICS_FULFILLED:
      return {
        ...state,
        poolStatistics: action.payload,
        poolStatisticsFetching: false,
        poolStatisticsFetched: true,
        poolStatisticsFailed: false
      };
    case FETCH_POOL_STATISTICS_REJECTED:
      return {
        ...state,
        poolStatistics: [],
        poolStatisticsFetching: false,
        poolStatisticsFetched: false,
        poolStatisticsFailed: true
      };
    default:
      return state;
  }
};