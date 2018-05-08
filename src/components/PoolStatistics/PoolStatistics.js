import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPoolStatistics } from '../state/actions/PoolStatisticsActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { PoolStatisticsElement } from './PoolsStatisticsElement';

class PoolStatistics extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPoolStatistics();
  }

  render() {
    return (
      <div className="m-3">
        {
          this.props.poolStatisticsFetched && <PoolStatisticsElement
            all_count={this.props.poolStatistics.all_pool_count}
            all_collected={this.props.poolStatistics.all_collected_eth}
            active_count={this.props.poolStatistics.active_pool_count}
            active_collected={this.props.poolStatistics.active_collected_eth} />
        }
        {
          <LoadingIndicator busy={this.props.poolStatisticsFetching} />
        }
        {
          this.props.poolStatisticsFailed && <Error message="Failed to fetch list of pools" />
        }
      </div>
    );
  }
}

PoolStatistics.propTypes = {
  fetchPoolStatistics: PropTypes.func.isRequired,
  poolStatistics: PropTypes.object.isRequired,
  poolStatisticsFetching: PropTypes.bool.isRequired,
  poolStatisticsFetched: PropTypes.bool.isRequired,
  poolStatisticsFailed: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { poolStatisticsFetching, poolStatisticsFetched, poolStatisticsFailed, poolStatistics } = state.poolStatistics;

  return { poolStatisticsFetching, poolStatisticsFetched, poolStatisticsFailed, poolStatistics };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchPoolStatistics }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(PoolStatistics);


// EXPORT COMPONENT

export { hoc as PoolStatistics };
