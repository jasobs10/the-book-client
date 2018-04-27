import React from 'react';
import { logout } from '../../actions/session_actions.js';
import { connect } from 'react-redux';

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
    <button onClick={() => props.logout()}>log out nukka</button>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
