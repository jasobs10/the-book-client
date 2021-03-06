import * as APIUTIL from '../apiutil/session.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const setUserToLocalStorage = (user) => {
  // if (!localStorage.currentUser) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  // }
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('currentUser')
};

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

export const resetPassword = (email) => {
  return (dispatch) => {
    return APIUTIL.reset(email).catch((error) => {
      dispatch(receiveSessionErrors(error.response.data));
    });
  }
};

export const signup = (user) => {
  return (dispatch) => {
    return APIUTIL.signup(user).then((response) => {
      setUserToLocalStorage(response.data);
      dispatch(receiveCurrentUser(response.data));
    }, (errors) => {
      dispatch(receiveSessionErrors(errors.response.data));
    });
  }
};

export const login = (user) => {
  return (dispatch) => {
    return APIUTIL.login(user).then((response) => {
      console.log(user)
      if (response.data !== "temp login successful") {
        setUserToLocalStorage(response.data);
        dispatch(receiveCurrentUser(response.data));
      } else {
        removeUserFromLocalStorage();
        dispatch(receiveCurrentUser(null));
      }
      return (response.data)
    }, (errors) => {
      dispatch(receiveSessionErrors(errors.response.data));
    });
  };
};

export const updatePasswordAndLogin= (user) => {
  return (dispatch) => {
    return APIUTIL.updatePassword(user).then((response) => {
      setUserToLocalStorage(response.data);
      dispatch(receiveCurrentUser(response.data));
      return true;
    }, (errors) => {
      dispatch(receiveSessionErrors(errors.response.data));
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    return APIUTIL.logout().then(() => {
      removeUserFromLocalStorage();
      dispatch(receiveCurrentUser(null));
    }, (errors) => {
      dispatch(receiveSessionErrors(errors.response.data));
    });
  };
};
