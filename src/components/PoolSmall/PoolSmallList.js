// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import isEmpty from 'lodash/isEmpty';
import { EmptyPool } from './EmptyPool';

// IMPORT PROJECT REFERENCES

import { PoolSmallListItem } from './PoolSmallListItem';


// COMPONENT

const renderList = pools => (
  <div className="box-shadow list-group animated fadeIn">
    {
      isEmpty(pools) && <EmptyPool />
    }
    {
      pools.map(pool => renderListItem(pool))
    }
  </div>
);

const renderListItem = pool => (
  <Fragment key={pool.address}>
    <PoolSmallListItem address={pool.address} amount={pool.collected_eth} deadline={pool.deadline} />
  </Fragment>
);

const PoolSmallList = (props) => (
  <Fragment>
    {renderList(props.pools)}
  </Fragment>
);

PoolSmallList.propTypes = {
  pools: PropTypes.array.isRequired
};

export { PoolSmallList };