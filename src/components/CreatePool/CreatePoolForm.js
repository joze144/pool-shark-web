import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';

import FormComponent from './FormComponent';

class CreatePoolForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FormComponent
          onSubmit={this.props.onSubmit}
          handleSubmit={this.props.handleSubmit}
        />
      </div>
    );
  }
}

CreatePoolForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

const formConfiguration = {
  form: 'create-pool-form'
};
const hoc = reduxForm(formConfiguration)(CreatePoolForm);

export { hoc as CreatePoolForm };