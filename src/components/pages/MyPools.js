// IMPORT PACKAGE REFERENCES

import React from 'react';
import { Web3Provider } from '../Web3/Web3Provider';

// COMPONENT

const MyPools = () => (
  <div>
    <div className="jumbotron jumbotron-fluid gradient-blue-top light-blue-top animated bottom-dark-border">
      <div className="text-center"><h1 className="title-text">My Pools</h1></div>
    </div>
    <Web3Provider />
  </div>
);

export { MyPools };