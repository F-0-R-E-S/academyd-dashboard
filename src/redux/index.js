import {combineReducers} from 'redux';
import {loginReducer} from './reducer/login/Login';

export const rootReducer = combineReducers({
  login: loginReducer,
});
