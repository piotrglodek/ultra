import React from 'react';
import StyleProvider from './theme/StyleProvider';
import { BrowserRouter as Router } from 'react-router-dom';

function Providers({ children }) {
  return (
    <StyleProvider>
      <Router>{children}</Router>
    </StyleProvider>
  );
}

export default Providers;
