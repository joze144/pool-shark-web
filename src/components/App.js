// IMPORT PACKAGES

import React from 'react';
import { Provider } from 'react-redux';

// IMPORT STORE

import { createAppStore } from '../components/state/stores/AppStore';

// IMPORT COMPONENTS

import { AppRouter } from './routers/AppRouter';
import { Menu } from './Menu/Menu';
import { Footer } from './Footer/Footer';
import { Web3Provider } from './Web3/Web3Provider';

// COMPONENT

export const App = () => (
  <Provider store={createAppStore()}>
    <div className="container">
      <Web3Provider />
      <Menu />
      <AppRouter />
      <Footer/>
    </div>
  </Provider>
);
