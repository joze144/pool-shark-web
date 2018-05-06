import React from 'react';
import ReduxMenu from './reduxMenu';

const Menu = () => (
  <ReduxMenu>
    <a className="navbar-brand" href="/">
      <img className="logo-image" src={ require('../../images/logo.png') } />
    </a>
    <a id="home" className="menu-item" href="/">Home</a>
    <a id="pools" className="menu-item" href="/pool">Find Pool</a>
    <a id="my-pools" className="menu-item" href="/my-pools">My Pools</a>
  </ReduxMenu>
)

export { Menu };