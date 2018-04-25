import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base/index.css';
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import registerServiceWorker from './registerServiceWorker';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (localStorage.currentUser) {

    //when building list of users, can add the current user to the list of users to preload
    const preloadedState = {
      session: {
        currentUser: JSON.parse(localStorage.currentUser)
      }
    }
    store = configureStore(preloadedState);
  }
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
  registerServiceWorker();
});
