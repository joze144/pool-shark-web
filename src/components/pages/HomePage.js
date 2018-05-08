// IMPORT PACKAGE REFERENCES

import React from 'react';
import { Home } from '../Home/Home';

// COMPONENT

const HomePage = () => (
  <div>
    <div className="jumbotron jumbotron-fluid light-blue-top animated bottom-dark-border">
      <div className="text-center"><h1 className="title-text">Shark of The Pool</h1></div>
      <div className="text-center"><p className="sub-title-text">Be a Shark!</p></div>
    </div>
    <Home />
  </div>
);

export { HomePage };