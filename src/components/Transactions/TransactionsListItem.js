// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { ether_scan } from '../../../config/common-paths';

// COMPONENT

const renderFailed = (address) => (
  <a href={ether_scan + 'tx/' + address} target="_blank" rel="noopener noreferrer" className="failed_color list-group-item failed-transaction-list-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <div className="text-center text-muted">TxId: {address}</div>
    </div>
    <small className="text-muted">Transaction failed to execute</small>
  </a>
);

const renderPending = (address) => (
  <a href={ether_scan + 'tx/' + address} target="_blank" rel="noopener noreferrer" className="pending-color list-group-item pending-transaction-list-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <div className="text-center text-muted">TxId: {address}</div>
    </div>
    <small className="text-muted">Not yet included into the block</small>
  </a>
);

const renderSuccess = (address, blockNumber) => (
  <a href={ether_scan + 'tx/' + address} target="_blank" rel="noopener noreferrer" className="success-color list-group-item success-transaction-list-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <div className="text-center text-muted">TxId: {address}</div>
    </div>
    <small className="text-muted">Included into the block number: {blockNumber}</small>
  </a>
);

const switchBasedOnStatus = (address, status, blockNumber) => {
  switch (status) {
    case 'Pending':
      return renderPending(address);
    case 'Success':
      return renderSuccess(address, blockNumber);
    case 'Failed':
      return renderFailed(address);
    default:
      return null;
  }
};


const TransactionsListItem = ({address, status, blockNumber}) => {
  return (
    <div>
      {
        switchBasedOnStatus(address, status, blockNumber)
      }
    </div>
  );
};

TransactionsListItem.propTypes = {
  address: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  blockNumber: PropTypes.number
};

export { TransactionsListItem };