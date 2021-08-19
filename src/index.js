import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import './assets/scss/index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducers from './redux/reducer';
import logger from 'redux-logger'

const middleware = [
  process.env.REACT_APP_ENV !== 'production' && logger
].filter(Boolean)

export const store = createStore(reducers, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
