import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Text from './Text';

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength50 = maxLength(50);
export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
export const minValueEpoch = value => (
  value && Math.floor(new Date().getTime()/1000) > value ? 'Must be higher than current epoch seconds: ' + Math.floor(new Date().getTime()/1000) : undefined
);
export const moreThanZero = value => (
  value && 0 >= value ? 'Value has to be more than 0' : undefined
);
export const isInteger = value => {
  return value && !/^[-+]?[1-9]\d*$/i.test(value) ? 'Has to be an integer' : undefined;
};

// Types
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9!?,():/' ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined;
const mustBeInteger = value =>
  value && parseInt(value) === 'NaN'
    ? 'Has to be an integer'
    : undefined;

export const FormComponent = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="m-0 m-auto">
      <form className="create-pool-form" onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="name"
          label="Pool Name"
          type="text"
          validate={[required, maxLength50, minLength2, alphaNumeric]}
          warn={alphaNumeric}
          component={Text}
        />
        <Field
          className="mt-1"
          name="rate"
          label="Rate for reward points"
          type="text"
          validate={[required, isInteger, moreThanZero]}
          warn={mustBeInteger}
          component={Text}
        />
        <Field
          className="mt-1"
          name="deadline"
          label="Deadline in Epoch Seconds"
          type="text"
          validate={[required, isInteger, minValueEpoch]}
          warn={mustBeInteger}
          component={Text}
        />
        <div className="mt-2">
          <button
            type="submit"
            className="center d-block m-auto btn btn-dark-blue"
          >
            Create Pool
          </button>
        </div>
      </form>
    </div>
  );
};

FormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default FormComponent;