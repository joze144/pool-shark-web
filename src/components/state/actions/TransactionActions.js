import { getTransactions } from '../../../services/TransactionsService';

export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const FETCH_TRANSACTIONS_PENDING = 'FETCH_TRANSACTIONS_PENDING';
export const FETCH_TRANSACTIONS_FULFILLED = 'FETCH_TRANSACTIONS_FULFILLED';
export const FETCH_TRANSACTIONS_REJECTED = 'FETCH_TRANSACTIONS_REJECTED';

// ACTION GENERATORS

const fetchTransactionsAction = (creator, types) => ({
  type: FETCH_TRANSACTIONS,
  payload: getTransactions(creator, types)
});

// EXPORT ACTIONS

export { fetchTransactionsAction as fetchTransactions };