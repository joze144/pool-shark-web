// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

// IMPORT PROJECT REFERENCES

import { TransactionsListItem } from './TransactionsListItem';
import { EmptyTransactions } from './EmptyTransactions';


// COMPONENT

const renderList = transactions => (
  <div className="box-shadow list-group animated fadeIn">
    {
      isEmpty(transactions) && <EmptyTransactions />
    }
    {transactions.map(transaction => renderListItem(transaction))}
  </div>
);

const renderListItem = transaction => (
  <Fragment key={transaction.tx_address}>
    <TransactionsListItem address={transaction.tx_address} status={transaction.tx_status} blockNumber={transaction.block_included} />
  </Fragment>
);

const TransactionsList = (props) => (
  <Fragment>
    {renderList(props.transactions)}
  </Fragment>
);

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired
};

export { TransactionsList };