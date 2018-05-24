// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


// IMPORT REDUCERS

import { FetchPoolsReducer } from './fetchPoolsReducer';
import { FetchSinglePoolReducer } from './fetchSinglePoolReducer';
import { FetchAccountsReducer } from './fetchAccountsWeb3';
import { FetchNetworkReducer } from './fetchNetworkWeb3';
import { FetchTokenHoldersReducer } from './fetchTokenHoldersReducer';
import {reducer as burgerMenu} from 'redux-burger-menu';
import { FetchPoolsLatestReducer } from './fetchPoolsLatestReducer';
import { FetchPoolsBestActiveReducer } from './fetchPoolsBestActiveReducer';
import { FetchPoolsBestEverReducer } from './fetchPoolsBestEverReducer';
import { FetchPoolStatisticsReducer } from './fetchPoolStatisticsReducer';
import { FetchPoolAccountActiveReducer } from './fetchPoolAccountActiveReducer';
import { FetchPoolAccountPastReducer } from './fetchPoolAccountPastReducer';
import { CreatePoolReducer } from './createPoolReducer';
import { FetchTransactionsReducer } from './fetchTransactionsReducer';
import { FetchPoolDetailsReducer } from './fetchPoolDetailsReducer';
import { PoolDepositReducer } from './poolDepositReducer';
import {PoolWithdrawReducer} from './poolWithdrawReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
  pools: FetchPoolsReducer,
  singlePool: FetchSinglePoolReducer,
  accounts: FetchAccountsReducer,
  network: FetchNetworkReducer,
  burgerMenu: burgerMenu,
  holders: FetchTokenHoldersReducer,
  poolsLatest: FetchPoolsLatestReducer,
  poolsBestActive: FetchPoolsBestActiveReducer,
  poolsBestEver: FetchPoolsBestEverReducer,
  poolStatistics: FetchPoolStatisticsReducer,
  poolAccountActive: FetchPoolAccountActiveReducer,
  poolAccountPast: FetchPoolAccountPastReducer,
  form: formReducer,
  createPool: CreatePoolReducer,
  transactions: FetchTransactionsReducer,
  poolDetails: FetchPoolDetailsReducer,
  poolDeposit: PoolDepositReducer,
  poolWithdraw: PoolWithdrawReducer
});