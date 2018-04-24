import * as APIUTIL from '../apiutil/session.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveSessionErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUTIL.signup(user).then((user) => {
      dispatch(receiveCurrentUser(user));
    }, (errors) => {
      dispatch(receiveSessionErrors(errors));
    });
  }
};

export const login = (user) => {
  return (dispatch) => {
    return APIUTIL.login(user).then((user) => {
      dispatch(receiveCurrentUser(user));
    }, (errors) => {
      dispatch(receiveSessionErrors(errors));
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    return APIUTIL.logout().then(() => {
      dispatch(receiveCurrentUser(null));
    }, (errors) => {
      dispatch(receiveSessionErrors(errors));
    });
  };
};
