import React from 'react';
import { Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import history from './services/history';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />

      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Khand&display=swap" rel="stylesheet" />
      </Helmet>

    </Router>
  );
}

export default App;