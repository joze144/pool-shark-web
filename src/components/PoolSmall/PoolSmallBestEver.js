import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPoolsBestEver } from '../state/actions/PoolBestEverActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { PoolSmallList } from './PoolSmallList';

class PoolSmallBestEver extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoolsBestEver();
  }

  render() {
    return (
      <div className="m-1">
        {
          this.props.poolBestEverFetched && <PoolSmallList pools={this.props.poolsBestEver} user_address={this.props.account_selected} />
        }
        {
          <LoadingIndicator busy={this.props.poolBestEverFetching} />
        }
        {
          this.props.poolBestEverFailed && <Error message="Failed to fetch list of pools" />
        }
      </div>
    );
  }
}

PoolSmallBestEver.propTypes = {
  fetchPoolsBestEver: PropTypes.func.isRequired,
  poolBestEverFetched: PropTypes.bool.isRequired,
  poolBestEverFetching: PropTypes.bool.isRequired,
  poolBestEverFailed: PropTypes.bool,
  poolsBestEver: PropTypes.array.isRequired,
  account_selected: PropTypes.string
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { poolBestEverFetching, poolBestEverFetched, poolBestEverFailed, poolsBestEver } = state.poolsBestEver;
  const { account_selected } = state.accounts;

  return { poolBestEverFetching, poolBestEverFetched, poolBestEverFailed, poolsBestEver, account_selected };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPoolsBestEver }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(PoolSmallBestEver);


// EXPORT COMPONENT

export { hoc as PoolSmallBestEver };