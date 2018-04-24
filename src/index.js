import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base/index.css';
import App from './App';
import configureStore from './store/store.js';
import registerServiceWorker from './registerServiceWorker';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();
});
