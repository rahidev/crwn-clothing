import React from 'react';

import { Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const App = () => (
  <div>
    <Route exact path='/' component={HomePage} />
<Route exact path='/shop/:product' render={({match}) => {
  console.log(match);
  return <h1>shop for {match.params.product}</h1>
}} />
  </div>
);

export default App;
