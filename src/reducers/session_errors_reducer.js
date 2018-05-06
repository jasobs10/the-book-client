import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions.js';

const _defaultErrorsState = {};

const sessionErrorsReducer = (oldState = _defaultErrorsState, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return _defaultErrorsState;
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
