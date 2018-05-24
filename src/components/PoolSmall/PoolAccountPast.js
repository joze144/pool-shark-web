import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPoolAccountPast } from '../state/actions/PoolAccountPastActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { PoolSmallList } from './PoolSmallList';

class PoolAccountPast extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoolAccountPast(this.props.account_selected);
  }

  render() {
    return (
      <div className="p-1 inline-half">
        <h3 className="dark-blue-text text-center text-shadow-gray">Past Pools</h3>
        {
          this.props.fetched && <PoolSmallList pools={this.props.pools} user_address={this.props.account_selected} />
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

PoolAccountPast.propTypes = {
  fetchPoolAccountPast: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  pools: PropTypes.array.isRequired,
  account_selected: PropTypes.string.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { fetching, fetched, failed, pools } = state.poolAccountPast;
  const { account_selected } = state.accounts;

  return { fetching, fetched, failed, pools, account_selected };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPoolAccountPast }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(PoolAccountPast);


// EXPORT COMPONENT

export { hoc as PoolAccountPast };