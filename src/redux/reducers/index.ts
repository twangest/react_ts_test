import { combineReducers } from 'redux';
import palette from './palette';
import { enableMapSet } from 'immer';

enableMapSet();

export * from './palette';

export default combineReducers({
  palette
});