import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';

import { AccountStatistics } from '../AccountStatistics/AccountStatistics';
import { ErrorWeb3 } from '../Web3/ErrorWeb3';
import { AccountUnavailable } from '../Web3/AccountUnavailable';
import { PoolAccountPast } from '../PoolSmall/PoolAccountPast';
import { PoolAccountActive } from '../PoolSmall/PoolAccountActive';

class MyPools extends Component {
  constructor(props) {
    super(props);

  }
  //
  // componentDidMount() {
  // }

  render() {
    const web3 = window.web3;
    let failed = false;
    let error = null;

    if (!web3) {
      failed = true;
      error = <ErrorWeb3 />;
    }

    if (isEmpty(this.props.accounts)) {
      failed = true;
      error = <AccountUnavailable />;
    }


    return (
      <div>
        <div className="p-3">
          {
            failed && error
          }
          {
            !failed && <AccountStatistics />
          }
        </div>
        <div className="p-3">
          {
            !failed && <PoolAccountPast />
          }
          {
            !failed && <PoolAccountActive />
          }
        </div>
      </div>
    );
  }
}

MyPools.propTypes = {
  accounts_fetched: PropTypes.bool.isRequired,
  account_selected: PropTypes.string,
  network_fetched: PropTypes.bool.isRequired,
  network_id: PropTypes.string,
  accounts: PropTypes.array
};

const mapStateToProps = state => {
  const { accounts, accounts_fetched, account_selected } = state.accounts;
  const { network_fetched, network_id } = state.network;

  return { accounts, accounts_fetched, account_selected, network_fetched, network_id };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(MyPools);

// EXPORT COMPONENT

export { hoc as MyPools };
