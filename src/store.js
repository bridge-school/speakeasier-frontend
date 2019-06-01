import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];
const middlewares = [
  thunk
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
