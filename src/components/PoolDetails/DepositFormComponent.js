import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Text from './Text';

const required = value => (value ? undefined : 'Required');
export const moreThanZero = value => (
  value && 0 >= value ? 'Value has to be more than 0' : undefined
);
export const isInteger = value => {
  return value && !/^[-+]?[1-9]\d*$/i.test(value) ? 'Has to be an integer' : undefined;
};

const mustBeInteger = value =>
  value && parseInt(value) === 'NaN'
    ? 'Has to be an integer'
    : undefined;

export const DepositFormComponent = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="m-0 m-auto">
      <form className="create-pool-form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="amount"
          label="Enter ETH amount you wish to deposit"
          type="text"
          validate={[required, isInteger, moreThanZero]}
          warn={mustBeInteger}
          component={Text}
        />
        <div className="mt-2">
          <button
            type="submit"
            className="btn btn-dark-blue center d-block m-auto"
          >
            Deposit ETH
          </button>
        </div>
      </form>
    </div>
  );
};

DepositFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default DepositFormComponent;