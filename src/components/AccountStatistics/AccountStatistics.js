import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
// import { Error } from '../shared/Error/Error';

class AccountStatistics extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="m-3">
        <p>Account statistics!</p>
      </div>
    );
  }
}

AccountStatistics.propTypes = {
  accounts_fetched: PropTypes.bool.isRequired,
  account_selected: PropTypes.string,
  network_fetched: PropTypes.bool.isRequired,
  network_id: PropTypes.string
};

const mapStateToProps = state => {
  const { accounts_fetched, account_selected } = state.accounts;
  const { network_fetched, network_id } = state.network;

  return { accounts_fetched, account_selected, network_fetched, network_id };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({}, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(AccountStatistics);

// EXPORT COMPONENT

export { hoc as AccountStatistics };
