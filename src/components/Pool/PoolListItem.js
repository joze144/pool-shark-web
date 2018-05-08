// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


// COMPONENT

function limitText (name, address) {
  const string = name + ' (' + address + ')';
  const length = 90;
  if(string.length > length) {
    const trimmedString = string.substring(0, 87);
    return trimmedString + '...';
  }
  return string;
}

const PoolListItem = ({address, name, rate, deadline}) => (
  <a href={'/pool/' + address} className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1 dark-blue-text">{limitText(name, address)}</h5>
      <small className="text-muted">Size: {address} ETH</small>
    </div>
    <small className="text-muted">Rate: {rate}, Deadline: <Moment unix>{Math.floor(deadline/1000)}</Moment></small>
  </a>
);

PoolListItem.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  deadline: PropTypes.number.isRequired
};

export { PoolListItem };