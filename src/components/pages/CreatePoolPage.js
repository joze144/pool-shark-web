// IMPORT PACKAGE REFERENCES

import React from 'react';
import { CreatePool } from '../CreatePool/CreatePool';

// COMPONENT

const CreatePoolPage = () => (
  <div>
    <div className="jumbotron jumbotron-fluid banner animated bottom-dark-border">
      <div className="text-center"><h1 className="title-text text-shadow-simple">Create New Pool</h1></div>
    </div>
    <CreatePool />
  </div>
);

export { CreatePoolPage };