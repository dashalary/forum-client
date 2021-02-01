import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) // to be able to use getState and dispatch

ReactDOM.render(
  <Provider store={store}>
    <Router>
     <NavBar />
        <Route exact path="/" component={Home} />
          <div>
            <App />
          </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

