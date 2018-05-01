// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT

const PoolListItem = ({address, name, rate, deadline}) => (
  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">{address} ({name})</h5>
      <small className="text-muted">{address}</small>
    </div>
    <small className="text-muted">Rate: {rate}, Deadline: {deadline}</small>
  </a>
);

PoolListItem.propTypes = {
  address: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  deadline: PropTypes.string.isRequired
};

export { PoolListItem };