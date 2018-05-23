import React from 'react';
import PropTypes from 'prop-types';

const PoolStatisticsElement = ({all_count, all_collected, active_count, active_collected}) => (
  <div className="m-0 m-auto">
    <div className="p-2 inline-half-small flex-column align-items-start">
      <p className="text-center dark-blue-text border-bottom text-shadow-gray">All time stats</p>
      <div className="text-muted">Pool count: {all_count}</div>
      <div className="text-muted">Ether collected: {all_collected.toFixed(2)} ETH</div>
    </div>
    <div className="p-2 inline-half-small flex-column align-items-start">
      <p className="text-center dark-blue-text border-bottom text-shadow-gray">Active pools stats</p>
      <div className="text-muted">Pool count: {active_count}</div>
      <div className="text-muted">Ether collected: {active_collected.toFixed(2)} ETH</div>
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