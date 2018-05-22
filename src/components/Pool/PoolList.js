// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

// IMPORT PROJECT REFERENCES

import { PoolListItem } from './PoolListItem';
import { EmptyPool } from '../PoolSmall/EmptyPool';


// COMPONENT

const renderList = pools => (
  <div className="box-shadow list-group animated fadeIn">
    {
      isEmpty(pools) && <EmptyPool />
    }
    {pools.map(pool => renderListItem(pool))}
  </div>
);

const renderListItem = pool => (
  <Fragment key={pool.address}>
    <PoolListItem address={pool.address} name={pool.name} rate={pool.rate} deadline={pool.deadline} amount={pool.collected_eth} />
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