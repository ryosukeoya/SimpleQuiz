import changeQuizOpenStateReducers from './changeQuizOpenState';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  changeQuizOpenState: changeQuizOpenStateReducers,
});

export default allReducers;
