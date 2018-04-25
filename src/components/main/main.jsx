import React from 'react';
import { logout } from '../../actions/session_actions.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

const Main = props => (
  <div>
    Logged in bro
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
