import currentNumberReducers from './currentNumber';
import questionOpenStateReducers from './questionOpenState';
import scoreOpenStateReducers from './scoreOpenState';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  questionOpenState: questionOpenStateReducers,
  currentNumber: currentNumberReducers,
  scoreOpenState: scoreOpenStateReducers,
});

export default allReducers;
