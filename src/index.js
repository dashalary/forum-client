import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) // to be able to use getState and dispatch
// const BrowserHistory = require('react-router/lib/BrowserHistory').default;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

