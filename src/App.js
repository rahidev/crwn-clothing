import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';

import Shop from './pages/shop/shop.component';

import AuthPage from './pages/auth-page/auth-page.component';

import './App.css';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={Shop} />
      <Route exact path='/signin' component={AuthPage} />
    </Switch>

  </div>
);

export default App;
