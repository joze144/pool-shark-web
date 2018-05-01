// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS

import { FetchPoolsReducer } from './fetchPoolsReducer';
import { FetchSinglePoolReducer } from './fetchSinglePoolReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
  pools: FetchPoolsReducer,
  singlePool: FetchSinglePoolReducer
});