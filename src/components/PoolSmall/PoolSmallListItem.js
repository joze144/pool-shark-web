// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


// COMPONENT

const PoolSmallListItem = ({address, amount, deadline}) => (
  <a href={'/pool/' + address} className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <p className="text-center dark-blue-text list-item">{address}</p>
    </div>
    <p className="text-muted">Collected: {amount} ETH</p>
    <small className="text-muted">Deadline: <Moment unix>{Math.floor(deadline/1000)}</Moment></small>
  </a>
);

PoolSmallListItem.propTypes = {
  address: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  deadline: PropTypes.number.isRequired
};

export { PoolSmallListItem };