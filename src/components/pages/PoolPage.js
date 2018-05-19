// IMPORT PACKAGE REFERENCES
import React from 'react';

// IMPORT PROJECT REFERENCES

import { Pool } from '../Pool/Pool';


// COMPONENT

export const PoolPage = () => (
  <div>
    <div className="jumbotron jumbotron-fluid text-dark banner animated bottom-dark-border">
      <div className="text-center"><h1 className="title-text text-shadow-simple">Find the pool</h1></div>
    </div>
    <Pool />
  </div>
);