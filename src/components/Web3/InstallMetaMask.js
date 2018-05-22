import React from 'react';

const InstallMetaMask = () => (
  <div className="meta-mask-img">
    <a href="https://metamask.io/">
      <img className="meta-mask-img" src={ require('../../images/metamask.png') } />
    </a>
  </div>
);

export { InstallMetaMask };