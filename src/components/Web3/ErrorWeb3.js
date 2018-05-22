import React from 'react';
import { IconNoWeb3 } from './IconNoWeb3';
import { InstallMetaMask } from './InstallMetaMask';

const ErrorWeb3 = () => (
  <div className="Web3Provider-container">
    <div className="Web3Provider-wrapper box-shadow">
      <div className="Web3Provider-image">
        <IconNoWeb3 />
      </div>
      <h1
        className="Web3Provider-title text-shadow-simple"
        dangerouslySetInnerHTML={{ __html: 'Web3 Not Found' }}
      />
      <p
        className="Web3Provider-message"
        dangerouslySetInnerHTML={{ __html: `
It seems that you are using a browser without Web3 capabilities. Please
make sure that you are using a web3-capable browser like mist or parity.
If you are using MetaMask or Parity extension, make sure that it is
enabled.
` }}
      />
    </div>
    <InstallMetaMask />
  </div>
);

export { ErrorWeb3 };