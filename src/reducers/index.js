import { combineReducers } from 'redux';
import authReducer from '../auth/services/reducer';

const rootReducer = combineReducers({
  authReducer
});


export default rootReducer;
