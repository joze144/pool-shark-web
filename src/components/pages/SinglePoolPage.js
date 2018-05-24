import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PoolDetails } from '../PoolDetails/PoolDetails';

class SinglePoolPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid banner animated bottom-dark-border">
          <div className="text-center"><p className="sub-title-text text-shadow-simple">Pool: {this.props.match.params.id}</p></div>
        </div>
        <div className="p-3">
          <PoolDetails poolAddress={this.props.match.params.id} />
        </div>
      </div>
    );
  }
}

SinglePoolPage.propTypes = {
  match: PropTypes.object.isRequired
};

// EXPORT COMPONENT

export { SinglePoolPage as SinglePoolPage };