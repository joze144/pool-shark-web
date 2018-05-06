import React from 'react';
import { IconNoWeb3 } from './IconNoWeb3';

const AccountUnavailable = (props) => (
  <div className="Web3Provider-container">
    <div className="Web3Provider-wrapper">
      <div className="Web3Provider-image">
        <IconNoWeb3 />
      </div>
      <h1
        className="Web3Provider-title"
        dangerouslySetInnerHTML={{ __html: 'No ETH Account Available' }}
      />
      <p
        className="Web3Provider-message"
        dangerouslySetInnerHTML={{ __html: `
It seems that you don&apos;t have an ETH account selected. If using
MetaMask, please make sure that your wallet is unlocked and that
you have at least one account in your accounts list.` }}
      />
    </div>
  </div>
);

export { AccountUnavailable };