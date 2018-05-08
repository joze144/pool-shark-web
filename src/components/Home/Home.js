import React, { Component } from 'react';
import { PoolSmallLatest } from '../PoolSmall/PoolSmallLatest';
import { PoolSmallBestEver } from '../PoolSmall/PoolSmallBestEver';
import { PoolSmallBestActive } from '../PoolSmall/PoolSmallBestActive';
import { PoolStatistics } from '../PoolStatistics/PoolStatistics';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="p-3">
          <PoolStatistics />
        </div>
        <div className="p-3">
          <div className="home-div-1 text-center">
            <h3 className="dark-blue-text text-center">Biggest Active</h3>
            <PoolSmallBestActive />
          </div>
          <div className="home-div-2 text-center">
            <h3 className="dark-blue-text text-center">Biggest Ever</h3>
            <PoolSmallBestEver />
          </div>
          <div className="home-div-3 text-center">
            <h3 className="dark-blue-text text-center">Latest</h3>
            <PoolSmallLatest />
          </div>
        </div>
      </div>
    );
  }
}

// EXPORT COMPONENT

export { Home as Home };