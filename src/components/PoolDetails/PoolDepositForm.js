import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import DepositFormComponent from './DepositFormComponent';

class PoolDepositForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border-bottom">
        <h3 className="text-center dark-blue-text">Deposit Ether to the pool</h3>
        <DepositFormComponent
          onSubmit={this.props.onSubmit}
          handleSubmit={this.props.handleSubmit}
        />
      </div>
    );
  }
}

PoolDepositForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const formConfiguration = {
  form: 'deposit-pool-form'
};
const hoc = reduxForm(formConfiguration)(PoolDepositForm);

export { hoc as PoolDepositForm };