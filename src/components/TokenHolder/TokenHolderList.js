// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// IMPORT PROJECT REFERENCES

import { TokenHolderListItem } from './TokenHolderListItem';


// COMPONENT

const renderList = holders => (
  <div className="list-group animated fadeIn">
    {holders.map(holder => renderListItem(holder))}
  </div>
);

const renderListItem = holder => (
  <Fragment key={holder.token_address}>
    <TokenHolderListItem address={holder.user_address} amount={holder.token_amount} shark={holder.is_shark} />
  </Fragment>
);

const TokenHolderList = (props) => (
  <Fragment>
    {renderList(props.holders)}
  </Fragment>
);

TokenHolderList.propTypes = {
  holders: PropTypes.array.isRequired
};

export { TokenHolderList };