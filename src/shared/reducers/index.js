import { combineReducers } from 'redux';
import usersReducer from './userReducer/userReducer';

const rootReducer = combineReducers({
  usersReducer
});

export default rootReducer;