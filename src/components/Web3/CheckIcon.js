import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CheckIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.account_exists && this.props.accounts_fetched) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="-263.5 236.5 26 26"
        >
          <g className="svg-success">
            <circle cx="-250.5" cy="249.5" r="12" fill="green" />
            <path d="M-256.46 249.65l3.9 3.74 8.02-7.8" />
          </g>
        </svg>
      );
    }

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="-263.5 236.5 26 26"
      >
        <g className="svg-success">
          <circle cx="-250.5" cy="249.5" r="12" fill="red" />
          <path d="M-256.46 249.65l3.9 3.74 8.02-7.8" />
        </g>
      </svg>
    )
    ;
  }
}

CheckIcon.propTypes = {
  accounts_fetched: PropTypes.bool.isRequired,
  account_exists: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  const { accounts_fetched, account_exists } = state.accounts;

  return { accounts_fetched, account_exists };
};

const hoc = connect(mapStateToProps, null)(CheckIcon);

// EXPORT COMPONENT

export { hoc as CheckIcon };