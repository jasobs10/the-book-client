import { RECEIVE_CURRENT_USER } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const _nullCurrentUser = Object.freeze({
  currentUser: null
});

const sessionReducer = (oldState = _nullCurrentUser, action) => {
  Object.freeze(oldState);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { currentUser: action.currentUser });
    default:
      return oldState;
  }
};

export default sessionReducer;
