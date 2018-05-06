import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isEmpty from 'lodash/isEmpty';
import { AccountUnavailable } from './AccountUnavailable';
import { ErrorWeb3 } from './ErrorWeb3';

import { fetchAccounts, fetchNetwork } from '../state/actions/Web3Actions';

const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
class Web3Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: [],
      network_id: null,
      network_fetched: false
    };
    this.interval = null;
    this.networkInterval = null;
  }

  /**
   * Start polling accounts, & network. We poll indefinitely so that we can
   * react to the user changing accounts or netowrks.
   */
  componentDidMount() {
    this.props.fetchAccounts();
    this.props.fetchNetwork();
    this.initPoll();
    this.initNetworkPoll();
  }

  /**
   * Init Web3/account polling, and prevent duplicate interval.
   * @return {void}
   */
  initPoll() {
    if (!this.interval) {
      this.interval = setInterval(this.fetchAccounts, ONE_SECOND);
    }
  }

  /**
   * Init network polling, and prevent duplicate intervals.
   * @return {void}
   */
  initNetworkPoll() {
    if (!this.networkInterval) {
      this.networkInterval = setInterval(this.fetchNetwork, ONE_MINUTE);
    }
  }

  handleAccounts(accounts, isConstructor = false) {
    const { onChangeAccount } = this.props;
    const { store } = this.context;
    let next = accounts[0];
    let curr = this.state.accounts[0];
    next = next && next.toLowerCase();
    curr = curr && curr.toLowerCase();
    const didChange = curr && next && (curr !== next);

    if (isEmpty(this.state.accounts) && !isEmpty(accounts)) {
      this.setState({
        accountsError: null,
        accounts: accounts
      });
    }

    if (didChange && !isConstructor) {
      this.setState({
        accountsError: null,
        accounts
      });
    }

    // If provided, execute callback
    if (didChange && typeof onChangeAccount === 'function') {
      onChangeAccount(next);
    }

    // If available, dispatch redux action
    if (store && typeof store.dispatch === 'function') {
      const didDefine = !curr && next;

      if (didDefine || (isConstructor && next)) {
        store.dispatch({
          type: 'Web3/RECEIVE_ACCOUNT',
          address: next
        });
      } else if (didChange) {
        store.dispatch({
          type: 'Web3/CHANGE_ACCOUNT',
          address: next
        });
      }
    }
  }

  /**
   * Get the account. We wrap in try/catch because reading `Web3.eth.accounrs`
   * will throw if no account is selected.
   * @return {String}
   */
  getAccounts() {
    try {
      const { web3 } = window;
      // throws if no account selected
      return web3.eth.accounts;
    } catch (e) {
      return [];
    }
  }

  render() {
    const web3 = window.web3;

    if (!web3) {
      return <ErrorWeb3 />;
    }

    if (isEmpty(this.state.accounts)) {
      return <AccountUnavailable />;
    }
  }
}

Web3Provider.propTypes = {
  fetchAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.array.isRequired,
  accounts_fetched: PropTypes.bool.isRequired,
  fetchNetwork: PropTypes.func.isRequired,
  network_id: PropTypes.string,
  network_fetched: PropTypes.bool.isRequired,
  onChangeAccount: PropTypes.func.isRequired,
  web3error: PropTypes.any,
  accountUnavailableScreen: PropTypes.any
};

Web3Provider.defaultProps = {
  passive: false,
  web3error: ErrorWeb3,
  accountUnavailableScreen: AccountUnavailable
};

const mapAccountsStateToProps = state => {
  const { accounts_fetched, accounts } = state.accounts;
  const { network_fetched, network_id } = state.network;

  return { accounts_fetched, accounts, network_fetched, network_id };
};

const mapAccountsDispatchToProps = dispatch => (
  bindActionCreators({ fetchAccounts, fetchNetwork }, dispatch)
);

const hoc = connect(mapAccountsStateToProps, mapAccountsDispatchToProps)(Web3Provider);


// EXPORT COMPONENT

export { hoc as Web3Provider };

/* =============================================================================
=    Deps
============================================================================= */
// function getNetwork(networkId) {
//   switch (networkId) {
//     case '1':
//       return 'MAINNET';
//     case '2':
//       return 'MORDEN';
//     case '3':
//       return 'ROPSTEN';
//     case '4':
//       return 'RINKEBY';
//     case '42':
//       return 'KOVAN';
//     default:
//       return 'UNKNOWN';
//   }
// }
