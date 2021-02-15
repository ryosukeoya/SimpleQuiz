import questionOpenStateReducers from './questionOpenState';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  questionOpenState: questionOpenStateReducers,
});

export default allReducers;
