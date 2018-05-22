import React from 'react';
import PropTypes from 'prop-types';

const PoolStatisticsElement = ({all_count, all_collected, active_count, active_collected}) => (
  <div>
    <div className="m-3 box-shadow inline-fifth list-group-item list-group-item-action flex-column align-items-start">
      <p className="text-center dark-blue-text">All time stats</p>
      <div>Pool count: {all_count}</div>
      <div>Ether collected: {all_collected.toFixed(2)} ETH</div>
    </div>
    <div className="m-3 box-shadow inline-fifth list-group-item list-group-item-action flex-column align-items-start">
      <p className="text-center dark-blue-text">Active pools stats</p>
      <div>Pool count: {active_count}</div>
      <div>Ether collected: {active_collected.toFixed(2)} ETH</div>
    </div>
  </div>
);

PoolStatisticsElement.propTypes ={
  all_count: PropTypes.number.isRequired,
  all_collected: PropTypes.number.isRequired,
  active_count: PropTypes.number.isRequired,
  active_collected: PropTypes.number.isRequired
};

export { PoolStatisticsElement };