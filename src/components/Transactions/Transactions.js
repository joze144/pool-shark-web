import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTransactions } from '../state/actions/TransactionActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { TransactionsList } from './TransactionsList';

class Transactions extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTransactions(this.props.creator, this.props.types);
  }

  render() {
    return (
      <div className="m-3">
        <h5 className="dark-blue-text text-center text-shadow-gray">Past transactions</h5>
        {
          this.props.fetched && <TransactionsList transactions={this.props.transactions} />
        }
        {
          <LoadingIndicator busy={this.props.fetching} />
        }
        {
          this.props.failed && <Error message="Failed to fetch list of transactions" />
        }
      </div>
    );
  }
}

Transactions.propTypes = {
  fetchTransactions: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  transactions: PropTypes.array.isRequired,
  types: PropTypes.array.isRequired,
  creator: PropTypes.string.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { fetching, fetched, failed, transactions } = state.transactions;

  return { fetching, fetched, failed, transactions };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchTransactions }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Transactions);


// EXPORT COMPONENT

export { hoc as Transactions };