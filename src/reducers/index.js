import { combineReducers } from 'redux';

import eventsReducer from './events.reducer';

const appReducer = combineReducers({
  eventsReducer
});

export default appReducer;
