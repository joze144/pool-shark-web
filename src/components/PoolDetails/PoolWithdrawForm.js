import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import WithdrawFormComponent from './WithdrawFormComponent';

class PoolWithdrawForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="border-bottom">
        <h3 className="text-center dark-blue-text">Congratulations, you are a Shark!</h3>
        <h3 className="text-center dark-blue-text">Withdraw Ether From the pool</h3>
        <WithdrawFormComponent
          onSubmit={this.props.onSubmit}
          handleSubmit={this.props.handleSubmit}
        />
      </div>
    );
  }
}

PoolWithdrawForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const formConfiguration = {
  form: 'withdraw-pool-form'
};
const hoc = reduxForm(formConfiguration)(PoolWithdrawForm);

export { hoc as PoolWithdrawForm };