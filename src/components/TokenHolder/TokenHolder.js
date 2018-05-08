import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchTokenHolders } from '../state/actions/TokenHolderActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Error } from '../shared/Error/Error';
import { TokenHolderList } from './TokenHolderList';

class TokenHolder extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTokenHolders(this.props.token);
  }

  render() {
    return (
      <div className="m-5">
        <div className="m-3"><h5 className="dark-blue-text text-center">Token holders list</h5></div>
        {
          this.props.fetched && <TokenHolderList holders={this.props.holders} />
        }
        {
          <LoadingIndicator busy={this.props.fetching} />
        }
        {
          this.props.failed && <Error message="Failed to fetch list of pools" />
        }
      </div>
    );
  }
}

TokenHolder.propTypes = {
  fetchTokenHolders: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired,
  fetching: PropTypes.bool.isRequired,
  failed: PropTypes.bool,
  holders: PropTypes.array.isRequired,
  token: PropTypes.string.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
  const { fetching, fetched, failed, holders } = state.holders;

  return { fetching, fetched, failed, holders };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchTokenHolders }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(TokenHolder);

// EXPORT COMPONENT

export { hoc as TokenHolder };
