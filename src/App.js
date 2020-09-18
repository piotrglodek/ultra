import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Providers from './Providers';
// components
import { Nav, Footer } from './components';
// pages
import { Home, Services, Sign } from './pages';

function App() {
  return (
    <Providers>
      <Nav />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/sign' exact component={Sign} />
      </Switch>
      <Footer />
    </Providers>
  );
}

export default App;
