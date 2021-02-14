import { combineReducers } from 'redux';
import postReducer from './posts';

const rootReducer = combineReducers({
  postReducer
});

// combineReducers calls reducers w the slices of the state selected according to their keys, and combines their results into a single object.

export default rootReducer