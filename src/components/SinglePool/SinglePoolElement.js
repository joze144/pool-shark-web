import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SinglePoolElement = ({message, id}) => (
  <Fragment key={id}>
    <div>Message: {message}</div>
  </Fragment>
);

SinglePoolElement.propTypes = {
  message: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export { SinglePoolElement };