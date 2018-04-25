import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base/index.css';
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import registerServiceWorker from './registerServiceWorker';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
  registerServiceWorker();
});
