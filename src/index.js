import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base/index.css';
import Root from './components/root.jsx';
import configureStore from './store/store.js';
import registerServiceWorker from './registerServiceWorker';



document.addEventListener('DOMContentLoaded', () => {
  let store;
  // make a call to look up the token
  // check shape first in case of error
  // need to check if the session is active first, if not log out user, so make a request
  // then can set preloaded state to the current user that it returns, and update the token?
  // save expiry on the frontend, check and then reset localstorage and preloadedstate if expired.
  // put it in the protected / authorized route things


  if (localStorage.currentUser) {

    //when building list of users, can add the current user to the list of users to preload
    const preloadedState = {
      session: {
        currentUser: JSON.parse(localStorage.currentUser)
      }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
  registerServiceWorker();
});
