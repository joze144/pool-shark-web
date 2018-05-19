import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPoolAccountActive } from '../state/actions/PoolAccountActiveActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { PoolSmallList } from './PoolSmallList';

class PoolAccountActive extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoolAccountActive(this.props.account_selected);
  }

  render() {
    return (
      <div className="p-1 inline-half">
        <h3 className="dark-blue-text text-center text-shadow-gray">Active Pools</h3>
        {
          this.props.fetched && <PoolSmallList pools={this.props.pools} />
        }
        {
          <LoadingIndicator busy={this.props.fetching} />
        }
        {
          this.props.failed && <Error message="Failed to fetch list of pools" />
        }
      </div>
    );
  }
}

PoolAccountActive.propTypes = {
  fetchPoolAccountActive: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  pools: PropTypes.array.isRequired,
  account_selected: PropTypes.string.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { fetching, fetched, failed, pools } = state.poolAccountActive;
  const { account_selected } = state.accounts;

  return { fetching, fetched, failed, pools, account_selected };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPoolAccountActive }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(PoolAccountActive);


// EXPORT COMPONENT

export { hoc as PoolAccountActive };