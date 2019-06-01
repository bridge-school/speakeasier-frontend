import { combineReducers } from 'redux';

import eventsState from './events.reducer';
import formState from './form.reducer';

const appReducer = combineReducers({
  eventsState,
  formState
});

export default appReducer;
