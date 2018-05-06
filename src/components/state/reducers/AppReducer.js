// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchPoolsReducer } from './fetchPoolsReducer';
import { FetchSinglePoolReducer } from './fetchSinglePoolReducer';
import { FetchAccountsReducer } from './fetchAccountsWeb3';
import { FetchNetworkReducer } from './fetchNetworkWeb3';

import {reducer as burgerMenu} from 'redux-burger-menu';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
  pools: FetchPoolsReducer,
  singlePool: FetchSinglePoolReducer,
  accounts: FetchAccountsReducer,
  network: FetchNetworkReducer,
  burgerMenu: burgerMenu
});