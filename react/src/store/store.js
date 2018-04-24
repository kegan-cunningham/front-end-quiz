import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../reducers/reducer.js';

const configureStore = (preloadedState = {}) => (
  createStore(Reducer, applyMiddleware(thunk))
);

export default configureStore;
