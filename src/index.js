import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {store, persistor} from './Redux/store.js'
import { PersistGate } from 'redux-persist/es/integration/react'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);