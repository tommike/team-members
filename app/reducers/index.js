import { combineReducers } from 'redux';
import dataLoading from './data-loading';
import members from './members';

export default combineReducers({
  members,
  dataLoading,
});
