// IMPORT PACKAGE REFERENCES
import React from 'react';

// IMPORT PROJECT REFERENCES

import { Pool } from '../Pool/Pool';


// COMPONENT

export const PoolPage = () => (
  <div>
    <div className="jumbotron jumbotron-fluid text-dark bg-light animated fadeIn">
      <div className="text-center"><h1 className="title-text">Find the pool!</h1></div>
    </div>
    <Pool />
  </div>
);