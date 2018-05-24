// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const PoolDetailsField = ({address, name, rate, deadline, amount_eth_collected, amount_points_collected, current_shark, creator}) => (
  <div className="w-100 mt-5 border-bottom">
    <div className="inline-half pl-3 pr-3">
      <h5 className="dark-blue-text border-bottom text-center text-shadow-gray">Pool Details</h5>
      <div className="text-muted"><span className="dark-blue-text text-shadow-gray">Name: </span>{name}</div>
      <div className="text-muted"><span className="dark-blue-text text-shadow-gray">Address: </span>{address}</div>
      <div className="text-muted"><span className="dark-blue-text text-shadow-gray">Reward points rate: </span>{rate}</div>
      <div className="text-muted"><span className="dark-blue-text text-shadow-gray">Creator: </span>{creator}</div>
    </div>
    <div className="inline-half pl-3 pr-3">
      <h5 className="dark-blue-text border-bottom text-center text-shadow-gray">Contribution Details</h5>
      <div className="text-muted"><span className="dark-blue-text text-shadow-gray">ETH collected: </span>{amount_eth_collected}</div>
      <div className="text-muted"><span className="dark-blue-text text-shadow-gray">Points distributed: </span>{amount_points_collected}</div>
      <div className="text-muted"><span className="dark-blue-text text-shadow-gray">Current Shark: </span>{current_shark}</div>
      <div className="text-muted"><span className="dark-blue-text text-shadow-gray">Contribution Deadline: </span><Moment unix>{Math.floor(deadline/1000)}</Moment></div>
    </div>
  </div>
);

PoolDetailsField.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  deadline: PropTypes.number.isRequired,
  amount_eth_collected: PropTypes.number.isRequired,
  amount_points_collected: PropTypes.number.isRequired,
  current_shark: PropTypes.string,
  creator: PropTypes.string.isRequired
};

export { PoolDetailsField };