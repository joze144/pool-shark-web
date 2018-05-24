import React from 'react';
import PropTypes from 'prop-types';

import { ether_scan } from '../../../config/common-paths';

const TransactionCreated = ({transactionId, transactionType}) => (
  <div className="failed_color failed-transaction-list-item-action">
    <a href={ether_scan + 'tx/' + transactionId} target="_blank" rel="noopener noreferrer" className="p-3 transaction-link flex-column align-items-start">
      <div className="p-1 d-flex w-100 justify-content-between">
        <h5 className="w-100 text-center dark-blue-text list-item">New {transactionType} transaction created!</h5>
      </div>
      <div className="p-1 d-flex w-100 justify-content-between">
        <p className="w-100 text-center dark-blue-text list-item">Transaction ID: {transactionId}</p>
      </div>
    </a>
  </div>
);

TransactionCreated.propTypes = {
  transactionId: PropTypes.string.isRequired,
  transactionType: PropTypes.string.isRequired
};

export { TransactionCreated };