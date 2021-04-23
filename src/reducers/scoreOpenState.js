const scoreOpenStateReducers = (state = false, action) => {
  switch (action.type) {
    case 'SCOREOPEN':
      return (state = true);
    case 'SCORECLOSE':
      return (state = false);
    default:
      return state;
  }
};

export default scoreOpenStateReducers;
