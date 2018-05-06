// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

// import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { PoolPage } from '../pages/PoolPage';
import { SinglePool } from '../SinglePool/SinglePool';
import { Web3Provider } from '../Web3/Web3Provider';
import { AboutPage } from '../pages/AboutPage';

// COMPONENT

export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      {/*<Header />*/}
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/pool' component={PoolPage} />
        <Route path='/my-pool' component={PoolPage} />
        <Route path='/pool/:id' component={SinglePool} />
        <Route path='/web' component={Web3Provider} />
        <Route path='/about' component={AboutPage} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  </BrowserRouter>
);