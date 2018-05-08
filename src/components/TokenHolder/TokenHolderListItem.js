// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

// COMPONENT

const TokenHolderListItem = ({address, amount, shark}) => {
  if(shark) {
    return (
      <div className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1 dark-blue-text">User Address: {address}</h5>
          <small className="text-muted">Size: {amount} Points</small>
        </div>
        <small className="text-muted">Current shark!</small>
      </div>
    );
  }

  return (
    <div className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1 dark-blue-text">User Address: {address}</h5>
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