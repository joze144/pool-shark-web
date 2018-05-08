import React from 'react';
import ReduxMenu from './reduxMenu';

const Menu = () => (
  <ReduxMenu>
    <a className="navbar-brand" href="/">
      <img className="logo-image" src={ require('../../images/logo.png') } />
    </a>
    <a id="home" className="menu-item" href="/">Home</a>
    <a id="pools" className="menu-item" href="/pools">Pool Explorer</a>
    <a id="my-pools" className="menu-item" href="/mypools">My Pools</a>
    <a id="create-pool" className="menu-item" href="/create">Create Pool</a>
  </ReduxMenu>
);

export { Menu };