import React, { Component } from 'react';
import { PoolSmallLatest } from '../PoolSmall/PoolSmallLatest';
import { PoolSmallBestEver } from '../PoolSmall/PoolSmallBestEver';
import { PoolSmallBestActive } from '../PoolSmall/PoolSmallBestActive';
import { PoolStatistics } from '../PoolStatistics/PoolStatistics';
import { InstallMetaMask } from '../Web3/InstallMetaMask';
import { EthereumIcon } from '../Web3/EthereumIcon';

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
          <div className="inline-half">
            <PoolStatistics />
          </div>
          <div className="p-2 inline-half">
            <p className="text-center d-table-cell dark-blue-text">Compete with others by depositing Ethereum to the pool. By doing so you get pool reward points, and the biggest holder is
              Shark of the pool. After deadline expires, Shark gets to withdraw all Ethereum collected in the pool.</p>
          </div>
        </div>
        <div className="p-3 border-top border-bottom">
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
        <EthereumIcon />
      </div>
    );
  }
}

// EXPORT COMPONENT

export { Home as Home };