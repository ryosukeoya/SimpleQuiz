import currentNumberReducers from './currentNumber';
import questionOpenStateReducers from './questionOpenState';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  questionOpenState: questionOpenStateReducers,
  currentNumber: currentNumberReducers,
});

export default allReducers;
