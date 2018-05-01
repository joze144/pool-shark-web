// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../Header/Header';
import { HomePage } from '../pages/HomePage';
import { PoolPage } from '../pages/PoolPage';
import { SinglePool } from '../SinglePool/SinglePool';

// COMPONENT

export const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/pool' component={PoolPage} />
        <Route path='/my-pool' component={PoolPage} />
        <Route path='/pool/:id' component={SinglePool} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  </BrowserRouter>
);