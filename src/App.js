import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import { Helmet } from 'react-helmet';

import history from './services/history';
import Routes from './routes';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />

          <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Khand&display=swap" rel="stylesheet" />
          </Helmet>

        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;