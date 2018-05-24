import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Text from './Text';

const required = value => (value ? undefined : 'Required');
export const moreThanZero = value => (
  value && 0 >= value ? 'Value has to be more than 0' : undefined
);
export const isDecimal = value => {
  return value && !/^\d+(\.\d{1,4})?$/i.test(value) ? 'Has to be a decimal number, with at most 4 decimal points' : undefined;
};

const mustBeDecimal = value =>
  value && parseFloat(value) === 'NaN'
    ? 'Has to be a decimal number, with at most 4 decimal points'
    : undefined;

export const DepositFormComponent = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="m-0 m-auto">
      <form className="create-pool-form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="amount"
          label="Enter ETH amount you wish to deposit"
          type="text"
          validate={[required, isDecimal, moreThanZero]}
          warn={mustBeDecimal}
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