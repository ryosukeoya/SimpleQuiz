//Reducers　state初期値　引数action
const currentNumberReducers = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT1':
      return (state = state + 1);
    case 'CLEAR':
      return (state = 0);
    default:
      return state;
  }
};

export default currentNumberReducers;
