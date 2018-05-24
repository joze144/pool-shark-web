import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';

import { Transactions } from '../Transactions/Transactions';
import { poolWithdraw } from '../state/actions/PoolWithdrawActions';
import { poolDeposit } from '../state/actions/PoolDepositActions';
import { fetchPoolDetails } from '../state/actions/PoolDetailsActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { ErrorWeb3 } from '../Web3/ErrorWeb3';
import { AccountUnavailable } from '../Web3/AccountUnavailable';
import { PoolDetailsField } from './PoolDetailsField';
import { TokenHolder } from '../TokenHolder/TokenHolder';
import { PoolDepositForm } from './PoolDepositForm';
import { PoolWithdrawForm } from './PoolWithdrawForm';
import { TransactionCreated } from '../TransactionCreated/TransactionCreated';

class PoolDetails extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onWithdrawSubmit = this.onWithdrawSubmit.bind(this);
  }

  onSubmit(values) {
    this.props.poolDeposit(this.props.poolAddress, values.amount);
  }

  onWithdrawSubmit() {
    this.props.poolWithdraw(this.props.poolAddress);
  }

  componentDidMount() {
    this.props.fetchPoolDetails(this.props.poolAddress);
  }

  render() {
    const web3 = window.web3;
    let failed = false;
    let error = null;

    if (!web3) {
      failed = true;
      error = <ErrorWeb3/>;
    }

    if (!failed && isEmpty(this.props.accounts)) {
      failed = true;
      error = <AccountUnavailable/>;
    }

    const active = (this.props.details && this.props.details.deadline > new Date().getTime());
    let isShark = false;
    if(!failed &&  this.props.details && this.props.details.current_shark) {
      isShark = (this.props.accounts[0].toLowerCase() === this.props.details.current_shark.toLowerCase());
    }

    return (
      <div>
        {
          !failed && active && <PoolDepositForm onSubmit={this.onSubmit} />
        }
        {
          this.props.depositFetched && <TransactionCreated transactionId={this.props.deposit} transactionType="Pool Deposit" />
        }
        {
          isShark && !active && <PoolWithdrawForm onSubmit={this.onWithdrawSubmit}/>
        }
        {
          this.props.withdrawFetched && <TransactionCreated transactionId={this.props.withdraw} transactionType="Pool Withdraw" />
        }
        {
          this.props.fetched && <PoolDetailsField
            address={this.props.details.address}
            name={this.props.details.name}
            rate={this.props.details.name}
            deadline={this.props.details.deadline}
            amount_eth_collected={this.props.details.collected_eth}
            amount_points_collected={this.props.details.points_distributed}
            current_shark={this.props.details.current_shark}
            creator={this.props.details.creator_address}  />
        }
        {
          <LoadingIndicator busy={this.props.fetching} />
        }
        {
          this.props.failed && <Error message="Failed to fetch list of pools" />
        }
        <TokenHolder token={this.props.poolAddress} />
        {
          !failed && <Transactions types={['Deposit', 'Withdraw', 'TokenTransfer']} creator={this.props.accounts[0]} />
        }
        {
          failed && error
        }
      </div>
    );
  }
}

PoolDetails.propTypes = {
  poolWithdraw: PropTypes.func.isRequired,
  withdrawFetched: PropTypes.bool.isRequired,
  withdraw: PropTypes.string,
  poolDeposit: PropTypes.func.isRequired,
  depositFetched: PropTypes.bool.isRequired,
  deposit: PropTypes.string,
  poolAddress: PropTypes.string.isRequired,
  fetchPoolDetails: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  details: PropTypes.object,
  accounts: PropTypes.array,
  network_fetched: PropTypes.bool.isRequired,
  network_id: PropTypes.string
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { accounts } = state.accounts;
  const { network_fetched, network_id } = state.network;
  const { fetching, fetched, failed, details } = state.poolDetails;
  const depositState = state.poolDeposit;
  const withdrawState = state.poolWithdraw;

  const depositFetched = depositState.fetched;
  const deposit = depositState.transaction;

  const withdrawFetched = withdrawState.fetched;
  const withdraw = withdrawState.transaction;

  return { fetching, fetched, failed, details, accounts, network_fetched, network_id, depositFetched, deposit, withdrawFetched, withdraw };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ poolWithdraw, poolDeposit, fetchPoolDetails }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(PoolDetails);

// EXPORT COMPONENT

export { hoc as PoolDetails };
