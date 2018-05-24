// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

// COMPONENT

const TokenHolderListItem = ({address, amount, shark}) => {
  if(shark) {
    return (
      <div className="list-group-item shark-color shark-list-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <div className="text-muted"><span className="dark-blue-text text-shadow-gray">User Address: </span>{address}</div>
          <small className="text-muted">Size: {amount} Points</small>
        </div>
        <small className="text-muted">Current shark!</small>
      </div>
    );
  }

  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <div className="text-muted"><span className="dark-blue-text text-shadow-gray">User Address: </span>{address}</div>
        <small className="text-muted">Size: {amount} Points</small>
      </div>
    </div>
  );
};

TokenHolderListItem.propTypes = {
  address: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  shark: PropTypes.bool.isRequired
};

export { TokenHolderListItem };