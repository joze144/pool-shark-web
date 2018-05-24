// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { ether_scan } from '../../../config/common-paths';

// COMPONENT

const resolveTransactionType = (type) => {
  switch (type) {
    case 'CreatePool':
      return 'create pool';
    case 'Withdraw':
      return 'withdraw';
    case 'Deposit':
      return 'deposit';
    case 'TokenTransfer':
      return 'token transfer';
    default:
      return '';
  }
};

const renderFailed = (address, type) => (
  <a href={ether_scan + 'tx/' + address} target="_blank" rel="noopener noreferrer" className="failed_color list-group-item failed-transaction-list-item-action flex-column align-items-start">
    <div className="w-100 text-center justify-content-between">
      <p className="text-center dark-blue-text list-item">Transaction Id: {address}</p>
      <small className="text-muted">Transaction type {type}</small>
    </div>
    <small className="text-muted">Transaction failed to execute</small>
  </a>
);

const renderPending = (address, type) => (
  <a href={ether_scan + 'tx/' + address} target="_blank" rel="noopener noreferrer" className="pending-color list-group-item pending-transaction-list-item-action flex-column align-items-start">
    <div className="w-100 text-center justify-content-between">
      <p className="text-center dark-blue-text list-item">Transaction Id: {address}</p>
      <small className="text-muted">Transaction type {type}</small>
    </div>
    <small className="text-muted">Not yet included into the block</small>
  </a>
);

const renderSuccess = (address, type, blockNumber) => (
  <a href={ether_scan + 'tx/' + address} target="_blank" rel="noopener noreferrer" className="success-color list-group-item success-transaction-list-item-action flex-column align-items-start">
    <div className="w-100 text-center justify-content-between">
      <p className="text-center dark-blue-text list-item">Transaction Id: {address}</p>
      <small className="text-muted">Transaction type {type}</small>
    </div>
    <small className="text-muted">Included into the block number: {blockNumber}</small>
  </a>
);

const switchBasedOnStatus = (address, status, blockNumber, type) => {
  switch (status) {
    case 'Pending':
      return renderPending(address, type);
    case 'Success':
      return renderSuccess(address, type, blockNumber);
    case 'Failed':
      return renderFailed(address, type);
    default:
      return null;
  }
};


const TransactionsListItem = ({address, status, blockNumber, type}) => {
  const resolvedType = resolveTransactionType(type);
  return (
    <div className="text-center">
      {
        switchBasedOnStatus(address, status, blockNumber, resolvedType)
      }
    </div>
  );
};

TransactionsListItem.propTypes = {
  address: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  blockNumber: PropTypes.number,
  type: PropTypes.string.isRequired
};

export { TransactionsListItem };