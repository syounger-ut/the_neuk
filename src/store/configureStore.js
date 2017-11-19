import {createStore, compose, applyMiddleware} from 'redux';
import thunk       from 'redux-thunk';
import allReducers from '../reducers';

export default function configureStore(initialState) {
  return createStore(allReducers, initialState,
    // Apply to store
    applyMiddleware(thunk)
  );
}
