import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Providers from './Providers';
// components
import { Nav, Footer } from './components';
// pages
import { Home, Services } from './pages';

function App() {
  return (
    <Providers>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
      </Switch>
      <Footer />
    </Providers>
  );
}

export default App;
