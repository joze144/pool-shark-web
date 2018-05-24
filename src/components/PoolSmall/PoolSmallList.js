// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import isEmpty from 'lodash/isEmpty';
import { EmptyPool } from './EmptyPool';

// IMPORT PROJECT REFERENCES

import { PoolSmallListItem } from './PoolSmallListItem';


// COMPONENT

const renderList = (pools, currentUser) => (
  <div className="box-shadow list-group animated fadeIn">
    {
      isEmpty(pools) && <EmptyPool />
    }
    {
      pools.map(pool => renderListItem(pool, currentUser))
    }
  </div>
);

const renderListItem = (pool, currentUser) => (
  <Fragment key={pool.address}>
    <PoolSmallListItem address={pool.address} amount={pool.collected_eth} deadline={pool.deadline} shark={pool.current_shark} user_address={currentUser} />
  </Fragment>
);

const PoolSmallList = (props) => (
  <Fragment>
    {renderList(props.pools, props.user_address)}
  </Fragment>
);

PoolSmallList.propTypes = {
  pools: PropTypes.array.isRequired,
  user_address: PropTypes.string
};

export { PoolSmallList };