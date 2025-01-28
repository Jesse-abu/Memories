import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers/index.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>, 
);


