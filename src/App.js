import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Providers from './Providers';
// components
import { Nav } from './components';
// pages
import { Home } from './pages';

function App() {
  return (
    <Providers>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Providers>
  );
}

export default App;
