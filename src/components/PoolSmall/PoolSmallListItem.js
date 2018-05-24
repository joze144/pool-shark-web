// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


// COMPONENT

const renderNormal = (address, amount, deadline, shark) => (
  <a href={'/pool/' + address} className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <p className="text-center dark-blue-text list-item">{address}</p>
    </div>
    <p className="text-muted">Collected: {amount} ETH</p>
    <small className="text-muted">Deadline: <Moment unix>{Math.floor(deadline/1000)}</Moment></small>
  </a>
);

const renderShark = (address, amount, deadline, shark) => (
  <a href={'/pool/' + address} className="list-group-item shark-color shark-list-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <p className="text-center dark-blue-text list-item">{address}</p>
    </div>
    <p className="text-muted">Collected: {amount} ETH. You are the Shark!</p>
    <small className="text-muted">Deadline: <Moment unix>{Math.floor(deadline/1000)}</Moment></small>
  </a>
);

const switchBasedOnStatus = (address, amount, deadline, shark, user_address) => {
  if (user_address && shark.toLowerCase() === user_address.toLowerCase()) {
    return renderShark(address, amount, deadline, shark);
  }

  return renderNormal(address, amount, deadline, shark);
};

const PoolSmallListItem = ({address, amount, deadline, shark, user_address}) => {
  return (
    <div className="text-center">
      {
        switchBasedOnStatus(address, amount, deadline, shark, user_address)
      }
    </div>
  );
};

PoolSmallListItem.propTypes = {
  address: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  deadline: PropTypes.number.isRequired,
  shark: PropTypes.string.isRequired,
  user_address: PropTypes.string
};

export { PoolSmallListItem };