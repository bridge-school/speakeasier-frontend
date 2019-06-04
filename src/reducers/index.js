import { combineReducers } from 'redux';
import eventsState from './events.reducer';

const appReducer = combineReducers({
  eventsState
});

export default appReducer;
