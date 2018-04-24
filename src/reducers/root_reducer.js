import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer.js';
import sessionReducer from './session_reducer.js';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer
});

export default rootReducer;
