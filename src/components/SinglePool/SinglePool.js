import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchSinglePool } from '../state/actions/SinglePoolActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import {SinglePoolElement} from './SinglePoolElement';

class SinglePool extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSinglePool(this.props.match.params.id);
  }

  render() {
    return (
      <div className="p-3">
        {
          this.props.fetched && <SinglePoolElement message={this.props.pool.message} id={this.props.match.params.id} />
        }
        {
          <LoadingIndicator busy={this.props.fetching} />
        }
        {
          this.props.failed && <Error message="Failed to fetch pool details" />
        }
      </div>
    );
  }
}

SinglePool.propTypes = {
  fetchSinglePool: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  pool: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { fetching, fetched, failed, pool } = state.singlePool;

  return { fetching, fetched, failed, pool };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchSinglePool }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(SinglePool);


// EXPORT COMPONENT

export { hoc as SinglePool };