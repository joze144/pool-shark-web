// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchPoolsReducer } from './fetchPoolsReducer';
import { FetchSinglePoolReducer } from './fetchSinglePoolReducer';
import { FetchAccountsReducer } from './fetchAccountsWeb3';
import { FetchNetworkReducer } from './fetchNetworkWeb3';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
  pools: FetchPoolsReducer,
  singlePool: FetchSinglePoolReducer,
  accounts: FetchAccountsReducer,
  network: FetchNetworkReducer
});