// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { PoolListItem } from './PoolListItem';


// COMPONENT

const renderList = pools => (
  <div className="list-group animated fadeIn">
    {pools.map(pool => renderListItem(pool))}
  </div>
);

const renderListItem = pool => (
  <Fragment key={pool.address}>
    <PoolListItem address={pool.address} name={pool.name} rate={pool.rate} deadline={pool.deadline} />
  </Fragment>
);

const PoolList = (props) => (
  <Fragment>
    {renderList(props.pools)}
  </Fragment>
);

PoolList.propTypes = {
  pools: PropTypes.array.isRequired
};

export { PoolList };