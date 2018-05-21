import React from 'react';
import { logout } from '../../actions/session_actions.js';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { test } from './test.jsx';
import NavBar from '../shared/navbar.jsx';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

const Main = props => (
  <div>
    <NavBar />
    <Route path="/messages" component={test} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
//    <button onClick={() => props.logout()}>log out</button>
