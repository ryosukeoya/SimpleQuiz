//Reducers　state初期値　引数action
const questionOpenStateReducers = (state = false, action) => {
  switch (action.type) {
    case 'QUESTIONOPEN':
      return (state = true);
    case 'QUESTIONCLOSE':
      return (state = false);
    default:
      return state;
  }
};

export default questionOpenStateReducers;
