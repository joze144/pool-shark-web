import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPools } from '../state/actions/PoolActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { PoolList } from './PoolList';
import SearchInput from 'react-search-input';

class Pool extends Component {
  constructor(props) {
    super(props);

    this.filter = '';
  }

  componentDidMount() {
    this.props.fetchPools(this.filter);
  }

  doSomething = (event) => {
    this.filter = event;
    this.props.fetchPools(event);
  }

  render() {
    return (
      <div >
        <SearchInput className="search-input" placeholder='find by name or address' onChange={this.doSomething} value={this.filter} />
        {/*<input className="filter-input" type="text" placeholder='find by name or address' onChange={this.doSomething} value={this.filter} />*/}
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