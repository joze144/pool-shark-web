import React, { Component } from 'react';
import { PoolSmallLatest } from '../PoolSmall/PoolSmallLatest';
import { PoolSmallBestEver } from '../PoolSmall/PoolSmallBestEver';
import { PoolSmallBestActive } from '../PoolSmall/PoolSmallBestActive';
import { PoolStatistics } from '../PoolStatistics/PoolStatistics';
import { InstallMetaMask } from '../Web3/InstallMetaMask';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const web3 = window.web3;

    return (
      <div>
        {
          !web3 && InstallMetaMask
        }
        <div>
          <PoolStatistics />
        </div>
        <div className="p-3 light-grey">
          <div className="inline-third text-center">
            <h5 className="dark-blue-text text-center text-shadow-gray">Biggest Active</h5>
            <PoolSmallBestActive />
          </div>
          <div className="inline-third text-center">
            <h5 className="dark-blue-text text-center text-shadow-gray">Biggest Ever</h5>
            <PoolSmallBestEver />
          </div>
          <div className="inline-third text-center">
            <h5 className="dark-blue-text text-center text-shadow-gray">Latest</h5>
            <PoolSmallLatest />
          </div>
        </div>
      </div>
    );
  }
}

// EXPORT COMPONENT

export { Home as Home };