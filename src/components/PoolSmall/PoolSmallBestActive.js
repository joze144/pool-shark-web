import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPoolsBestActive } from '../state/actions/PoolBestActiveActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { PoolSmallList } from './PoolSmallList';

class PoolSmallBestActive extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoolsBestActive();
  }

  render() {
    return (
      <div className="m-1">
        {
          this.props.poolBestActiveFetched && <PoolSmallList pools={this.props.poolsBestActive} user_address={this.props.account_selected} />
        }
        {
          <LoadingIndicator busy={this.props.poolBestActiveFetching} />
        }
        {
          this.props.poolBestActiveFailed && <Error message="Failed to fetch list of pools" />
        }
      </div>
    );
  }
}

PoolSmallBestActive.propTypes = {
  fetchPoolsBestActive: PropTypes.func.isRequired,
  poolBestActiveFetched: PropTypes.bool.isRequired,
  poolBestActiveFetching: PropTypes.bool.isRequired,
  poolBestActiveFailed: PropTypes.bool,
  poolsBestActive: PropTypes.array.isRequired,
  account_selected: PropTypes.string
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { poolBestActiveFetching, poolBestActiveFetched, poolBestActiveFailed, poolsBestActive } = state.poolsBestActive;
  const { account_selected } = state.accounts;

  return { poolBestActiveFetching, poolBestActiveFetched, poolBestActiveFailed, poolsBestActive, account_selected };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPoolsBestActive }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(PoolSmallBestActive);


// EXPORT COMPONENT

export { hoc as PoolSmallBestActive };