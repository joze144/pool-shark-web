import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { eth_network } from '../../../config/common-paths';

import { createPool } from '../state/actions/CreatePoolActions';
import { AccountUnavailable } from '../Web3/AccountUnavailable';
import { ErrorWeb3 } from '../Web3/ErrorWeb3';
import { WrongNetwork } from '../Web3/WrongNetwork';
import { TransactionCreated } from '../TransactionCreated/TransactionCreated';
import isEmpty from 'lodash/isEmpty';

import { CreatePoolForm } from './CreatePoolForm';
import { Transactions } from '../Transactions/Transactions';

class CreatePool extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.createPool(values);
  }

  render() {
    const web3 = window.web3;
    let failed = false;
    let error = null;

    if (!web3) {
      failed = true;
      error = <ErrorWeb3/>;
    }

    if (isEmpty(this.props.accounts)) {
      failed = true;
      error = <AccountUnavailable/>;
    }

    if (!failed && this.props.network_id && this.props.network_id !== eth_network) {
      failed = true;
      error = <WrongNetwork />;
    }

    return (
      <div>
        <div className="m-0 m-auto">
          {
            failed && error
          }
          {
            !failed && <CreatePoolForm onSubmit={this.onSubmit} />
          }
          {
            this.props.fetched && <TransactionCreated transactionId={this.props.pool} transactionType="Create Pool" />
          }
        </div>
        <div className="m-2 p-2 m-auto border-top">
          {
            !failed && <Transactions creator={this.props.accounts[0]} types={['CreatePool']} />
          }
        </div>
      </div>
    );
  }
}

CreatePool.propTypes = {
  createPool: PropTypes.func.isRequired,
  accounts_fetched: PropTypes.bool.isRequired,
  account_selected: PropTypes.string,
  network_fetched: PropTypes.bool.isRequired,
  network_id: PropTypes.string,
  accounts: PropTypes.array,
  failed: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  fetched: PropTypes.bool.isRequired,
  pool: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  const { accounts, accounts_fetched, account_selected } = state.accounts;
  const { network_fetched, network_id } = state.network;
  const { failed, fetching, fetched, pool } = state.createPool;

  return { accounts, accounts_fetched, account_selected, network_fetched, network_id, failed, fetching, fetched, pool };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ createPool }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(CreatePool);

// EXPORT COMPONENT

export { hoc as CreatePool };