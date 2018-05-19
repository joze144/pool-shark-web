// IMPORT PACKAGE REFERENCES

import React from 'react';
import { MyPools } from '../MyPools/MyPools';

// COMPONENT

const MyPoolsPage = () => (
  <div>
    <div className="jumbotron jumbotron-fluid gradient-blue-top banner animated bottom-dark-border">
      <div className="text-center"><h1 className="title-text text-shadow-simple">My Pools</h1></div>
    </div>
    <MyPools />
  </div>
);

export { MyPoolsPage };