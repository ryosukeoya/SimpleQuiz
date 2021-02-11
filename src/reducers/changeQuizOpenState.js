import { CardActions } from '@material-ui/core';

//Reducers　state初期値　引数action
const changeQuizOpenStateReducers = (state = false, action) => {
  switch (action.type) {
    case 'CLOSEQUIZ':
      return (state = false);
    case 'OPENQUIZ':
      return (state = true);
    default:
      return state;
  }
};

export default changeQuizOpenStateReducers;
