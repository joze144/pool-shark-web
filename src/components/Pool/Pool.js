import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPools } from '../state/actions/PoolActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { PoolList } from './PoolList';

class Pool extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    filter: ''
  };

  componentDidMount() {
    this.props.fetchPools(this.state.filter);
  }

  doSomething = (event) => {
    this.setState({filter: event.target.value});
    this.props.fetchPools(event.target.value);
  }

  render() {
    return (
      <div>
        <input className="filter-input" type="text" placeholder='find by name or address' onChange={this.doSomething} value={this.state.filter} />
        {
          this.props.fetched && <PoolList pools={this.props.pools} />
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

Pool.propTypes = {
  fetchPools: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  pools: PropTypes.array.isRequired,
  filter: PropTypes.string
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { fetching, fetched, failed, pools } = state.pools;

  return { fetching, fetched, failed, pools };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPools }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Pool);


// EXPORT COMPONENT

export { hoc as Pool };