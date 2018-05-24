import React from 'react';

import { eth_network } from '../../../config/common-paths';

const getText = (neededNetwork) => (
  <div className="p-3 failed_color failed-transaction-list-item-action">
    <h5 className="text-center dark-blue-text list-item">Wrong blockchain network!</h5>
    <div className="text-center dark-blue-text list-item">Switch to {neededNetwork} to use this DAPP</div>
  </div>
);

const WrongNetwork = () => {
  const network = resolveNetwork(eth_network);
  return (
    <div className="text-center">
      {
        getText(network)
      }
    </div>
  );
};

export { WrongNetwork };

const resolveNetwork = (netId) => {
  switch (netId) {
    case '1':
      return 'MAIN NET';
    case '2':
      return 'MORDEN';
    case '3':
      return 'ROPSTEN';
    case '4':
      return 'RINKEBY';
    case '42':
      return 'KOVAN';
    default:
      return 'UNKNOWN';
  }
};