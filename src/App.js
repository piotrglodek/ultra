import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Providers from './Providers';
// components
import { Nav, Footer } from './components';
// pages
import { Home } from './pages';

function App() {
  return (
    <Providers>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Providers>
  );
}

export default App;
