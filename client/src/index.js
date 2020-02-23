import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// React redux
import { Provider } from 'react-redux';
// Redux Store
import { store, persistor } from './redux/store';
// Redux Persist - local Storage (3)
import { PersistGate } from 'redux-persist/integration/react';
// Service Worker
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
// Service Worker registration
serviceWorker.register();
