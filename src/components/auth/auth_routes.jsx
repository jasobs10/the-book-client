import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const isLoggedIn = (currentUser) => {
  if (currentUser) {
    const expiration = JSON.parse(currentUser.session_token).exp
    const currentTime = new Date().getTime() / 1000
    return currentTime < expiration
  } else {
    return false
  }
}

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/home" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const mapStateToProps = (state) => {
  // here can check to see if jwt is expired, and will tell if logged in or not
  // dont even need to set currentUser
  // need to dispatch action to log out current user on failed request due to expired token
  return {
    loggedIn: isLoggedIn(state.session.currentUser)
  }
}

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
