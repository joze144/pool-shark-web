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
          <div className="inline-third text-center">
            <h3 className="dark-blue-text text-center text-shadow-gray">Biggest Active</h3>
            <PoolSmallBestActive />
          </div>
          <div className="inline-third text-center">
            <h3 className="dark-blue-text text-center text-shadow-gray">Biggest Ever</h3>
            <PoolSmallBestEver />
          </div>
          <div className="inline-third text-center">
            <h3 className="dark-blue-text text-center text-shadow-gray">Latest</h3>
            <PoolSmallLatest />
          </div>
        </div>
      </div>
    );
  }
}

// EXPORT COMPONENT

export { Home as Home };