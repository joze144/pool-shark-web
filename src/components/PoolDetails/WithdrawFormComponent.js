import React from 'react';
import PropTypes from 'prop-types';

export const WithdrawFormComponent = ({ handleSubmit, onSubmit }) => {
  return (
    <div className="m-0 m-auto">
      <form className="create-pool-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2">
          <button
            type="submit"
            className="btn btn-dark-blue center d-block m-auto"
          >
            Withdraw ETH
          </button>
        </div>
      </form>
    </div>
  );
};

WithdrawFormComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default WithdrawFormComponent;