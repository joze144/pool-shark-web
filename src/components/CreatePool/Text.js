import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({ label, input, type, meta: { touched, error, warning } }) => {
  return (
    <div className="mt-1 mv4 w-100">
      <input
        {...input}
        placeholder={label}
        type={type}
        className="w-100 form-input"
      />
      {touched &&
      ((error && <span className="text-danger">{error}</span>) ||
        (warning && <span className="text-muted">{warning}</span>))}
    </div>
  );
};

Text.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  meta: PropTypes.object
};

export default Text;